import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import CP from './pages/CP';
import Development from './pages/Development';
import Academics from './pages/Academics';
import Intern from './pages/Intern';
import Others from './pages/Others';
import Ishaan from './pages/ishaan'; // adjust path if needed
import Agrim from './pages/Agrim';
import Akshay from './pages/Akshay';
import Rishika from './pages/Rishika';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* New Routes for Categories */}
        <Route path="/CP" element={<CP />} />
        <Route path="/DEVELOPMENT" element={<Development />} />
        <Route path="/ACADEMICS" element={<Academics />} />
        <Route path="/INTERN" element={<Intern />} />
        <Route path="/OTHERS" element={<Others />} />
        <Route path="/profile/ishaan" element={<Ishaan />} />
        <Route path="/agrim" element={<Agrim />} />
        <Route path="/Akshay" element={<Akshay />} />
        <Route path="/Rishika" element={<Rishika />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
