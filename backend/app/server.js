const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const MongoClient = require('mongodb').MongoClient;
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const app = express();
const port = process.env.PORT || 3000;

let db; // global db instance

// MongoDB connection
async function connectToMongo() {
    try {
        await client.connect();
        db = client.db('MANGODB'); // Make sure the DB name is correct
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
connectToMongo();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure all EJS files are in /backend/app/views/

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}));

// Serve static frontend files (from root `frontend/`)
app.use(express.static(path.join(__dirname, '../../frontend')));

// Optional: Alias frontend assets (if using /css, /js etc.)
app.use('/css', express.static(path.join(__dirname, '../../frontend/css')));
app.use('/js', express.static(path.join(__dirname, '../../frontend/js')));
app.use('/img', express.static(path.join(__dirname, '../../frontend/img')));

// Nodemailer setup (use .env in real projects!)
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

// ROUTES

// Home → Redirect or serve HTML homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/html/index.html'));
});

// Signup route
app.get('/signup', (req, res) => {
    res.render('signup', { title: 'Signup System' });
});

app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) return res.status(400).send('User with this email already exists');

        await db.collection('users').insertOne({ email, password });
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Login route
app.get('/login', (req, res) => {
    res.render('login', { title: 'Login System' });
});

// Dashboard route
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard', { user: req.session.user });
    } else {
        res.status(401).send('Unauthorized User');
    }
});

// Forgot Password
app.post('/api/forgot-password', async (req, res) => {
    const { email } = req.body;
    const user = await db.collection('users').findOne({ email });

    if (!user) return res.status(400).send('User does not exist');

    const resetToken = crypto.randomBytes(32).toString('hex');
    const tokenExpiry = Date.now() + 3600000;

    await db.collection('users').updateOne({ email }, { $set: { resetToken, tokenExpiry } });

    const resetLink = `http://localhost:${port}/reset-password/${resetToken}`;

    await transporter.sendMail({
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Password Reset',
        text: `Reset your password using this link: ${resetLink}`
    });

    res.send('Password reset link sent to your email.');
});

// Reset password form
app.get('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const user = await db.collection('users').findOne({ resetToken: token, tokenExpiry: { $gt: Date.now() } });

    if (!user) return res.status(400).send('Invalid or expired token');
    res.render('reset-password', { title: 'Reset Password', token });
});

// Reset password POST
app.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    const user = await db.collection('users').findOne({ resetToken: token, tokenExpiry: { $gt: Date.now() } });
    if (!user) return res.status(400).send('Invalid or expired token');

    await db.collection('users').updateOne(
        { resetToken: token },
        { $set: { password }, $unset: { resetToken: '', tokenExpiry: '' } }
    );

    res.send('Password reset successful.');
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
