import React from 'react';
import '../styles/contetDetails.css';

function Ishaan() {
  return (
    <div className="student-profile-container">
      <div className="student-image">
        <img src="/img/profile.jpeg" alt="Student" />
      </div>
      <div className="student-details">
        <h2>Ishaan Oberoi</h2>
        <p>
          Batch: 2025<br />
          <br />Branch: Information Technology<br />
          <br />Specialization: Competitive Coding<br />
          <br />Asia West Finalist || Amritapuri Regionalist 2023 || Expert @codeforces (max 1825) || 5⭐ at CodeChef || GR 358 @ Kickstart 22 || GR 924 @ Meta HC 2023 || Guardian @Leetcode (2583) (AIR 30)
          <br /><br />CodePlus Coordinator || LeetCode Problem Adder || Coordinator of Competitive Coding Wing - GeekHaven || CC Wing Member
        </p>
        <button id="chat-now">Chat Now</button>
      </div>
    </div>
  );
}

export default Ishaan;
