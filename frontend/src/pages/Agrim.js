import React from 'react';
import '../styles/contetDetails.css'; // adjust path as needed

function Agrim() {
  return (
    <div className="student-profile-container">
      <div className="student-image">
        <img src="/img/profile.jpeg" alt="Student" />
      </div>
      <div className="student-details">
        <h2>Agrim Nauriyal</h2>
        <p>
          Batch: 2026<br /><br />
          Branch: Information Technology<br /><br />
          Specialization: Competitive Coding<br /><br />
          ICPC Regionalist | Expert on CodeForces | 5 ⭐ on CodeChef | Guardian on LeetCode | IIIT A '26
          <br /><br />
          GeekHaven Member
        </p>
        <button id="chat-now">Chat Now</button>
      </div>
    </div>
  );
}

export default Agrim;
