import React from 'react';
import '../styles/contetDetails.css'; // Adjust if your css path differs

const Rishika = () => {
  return (
    <div className="student-profile-container">
      <div className="student-image">
        <img src="/img/profile.jpeg" alt="Rishika Agarwal" />
      </div>
      <div className="student-details">
        <h2>Rishika Agarwal</h2>
        <p>
          Batch: 2026<br /><br />
          Branch: Information Technology<br /><br />
          Specialization: Development<br /><br />
          Mentee @ Desis Ascend Educare 2023-24 |
          Google WE'23 Scholar | Contributor @GSSoC'23<br /><br />
          Mentee @ Desis Ascend Educare<br />
          D. E. Shaw India Private Limited<br />
          Google WE'23 Scholar - TalentSprint<br />
          Contributor - GirlScript Summer of Code
        </p>
        <button id="chat-now">Chat Now</button>
      </div>
    </div>
  );
};

export default Rishika;
