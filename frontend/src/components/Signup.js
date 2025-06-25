import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', { email, password });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Error signing up');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
