import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <header>
      <section>
        <div id="container">
          <div id="logo">
            <a href="/">
              <img src="/img/image.png" alt="logo" width="150px" />
            </a>
          </div>

          <div id="search">
            <i className="fas fa-search search"></i>
            <input type="text" id="input" name="searchBox" placeholder="Search for MENTORS!" />
          </div>

          <div id="collection">
            <div id="CP"><a href="/CP">CP</a></div>
            <div id="DEVELOPEMENT"><a href="/DEVELOPMENT">DEVELOPEMENT</a></div>
            <div id="ACADEMIC"><a href="/ACADEMICS">ACADEMICS</a></div>
            <div id="INTERNS"><a href="/INTERN">INTERN SPECIALIST</a></div>
            <div id="OTHERS"><a href="/OTHERS">OTHERS</a></div>
          </div>

          <div id="user" onClick={goToSignup} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faUser} size="lg" className="userIcon" />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
