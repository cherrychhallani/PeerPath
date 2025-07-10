import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      alert(res.data.message);
      navigate('/'); // Redirect to home
    } catch (err) {
      setError(err.response?.data?.message || 'Login error');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.heading}>Let’s Get You Logged In!</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>Login</button>

        {error && <div style={styles.error}>{error}</div>}

        <div style={styles.signupBox}>
          Don't have an account?{' '}
          <Link to="/signup" style={styles.signupLink}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '40px',
    fontFamily: 'sans-serif',
  },
  formBox: {
    background: '#81c3d7',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    width: '420px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '24px',
    fontSize: '24px',
    color: '#004d66',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#004d66',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  error: {
    marginTop: '12px',
    color: 'white',
    fontSize: '14px',
  },
  signupBox: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#ffffff',
  },
  signupLink: {
    color: '#004d66',
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginLeft: '5px',
  }
};

export default Login;
