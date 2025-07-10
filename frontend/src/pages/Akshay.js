import React from 'react';
import '../styles/contetDetails.css'; // Update path if your styles are in a different folder

const Akshay = () => {
  return (
    <div className="student-profile-container">
      <div className="student-image">
        <img src="/img/profile.jpeg" alt="Akshay Waghmare" />
      </div>
      <div className="student-details">
        <h2>Akshay Waghmare</h2>
        <p>
          Batch: 2026<br /><br />
          Branch: Information Technology<br /><br />
          Specialization: Development<br /><br />
          Building Wemofy || Member - Web Development Wing<br />
          GeekHaven, IIIT Allahabad<br /><br />
          Founder & CEO - Wemofy<br />
          Web Developer @ Freelancer.com
        </p>
        <button id="chat-now">Chat Now</button>
      </div>
    </div>
  );
};

export default Akshay;
