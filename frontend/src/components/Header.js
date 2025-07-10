import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/login');
  };

  return (
    <header>
      <section>
        <div id="container">
          <div id="logo">
            <Link to="/">
              <img src="/img/image.png" alt="logo" width="150px" />
            </Link>
          </div>

          <div id="search">
            <i className="fas fa-search search"></i>
            <input type="text" id="input" name="searchBox" placeholder="Search for MENTORS!" />
          </div>

          <div id="collection">
            <div id="CP"><Link to="/CP">CP</Link></div>
            <div id="DEVELOPMENT"><Link to="/DEVELOPMENT">DEVELOPMENT</Link></div>
            <div id="ACADEMICS"><Link to="/ACADEMICS">ACADEMICS</Link></div>
            <div id="INTERN"><Link to="/INTERN">INTERN SPECIALIST</Link></div>
            <div id="OTHERS"><Link to="/OTHERS">OTHERS</Link></div>
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
