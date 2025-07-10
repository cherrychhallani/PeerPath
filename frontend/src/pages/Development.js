import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/category.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Development() {
    const navigate = useNavigate();
  
  return (
    <div>
      <div className="heading">
        <h2><b>DEVELOPMENT MENTORS</b></h2>
      </div>

      <div className="category">
        <div className="products section container" id="products">
          <div className="products__container grid">
            <div className="products__card" onClick={() => navigate("/Rishika")}>
              <img src="/img/rishika.jpeg" alt="" className="products__img" />
              <h3 className="products__title">Rishika Gupta</h3>
              <span className="products__price">2<sup>nd</sup> Year</span>
              <p className="products__description">
                UI/UX Designer<br />
                Member - GeekHaven<br />
                (Design Wing)
              </p>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div className="products__card" onClick={() => window.open("/contentDetails", "_blank")}>  
              <img src="/img/Saishee Kouda.jpeg" alt="" className="products__img" />
              <h3 className="products__title">Saishree Kouda</h3>
              <span className="products__price">3<sup>rd</sup> Year</span>
              <p className="products__description">
                Frontend Developer<br />
                UI/UX Designer<br />
                GeekHaven - Coordinator<br />
                Design Wing
              </p>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div className="products__card" onClick={() => navigate("/Akshay")}>  
              <div className="available-sign"></div>
              <img src="/img/Akshay Waghmare.jpeg" alt="" className="products__img" />
              <h3 className="products__title">Akshay Waghmare</h3>
              <span className="products__price">2<sup>nd</sup> Year</span>
              <p className="products__description">
                Founder & CEO-Wemofy<br />
                Member - GeekHaven<br />
                (Web Development Wing)<br />
                Freelance Web Developer
              </p>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div className="products__card" onClick={() => window.open("/contentDetails", "_blank")}>  
              <img src="/img/profile.jpeg" alt="" className="products__img" />
              <h3 className="products__title">Anurag Jain</h3>
              <span className="products__price">3<sup>rd</sup> Year</span>
              <p className="products__description">
                Software Development Intern @ GobbleCube<br />
                Overall Coordinator and Member, Web Development Wing: GeekHaven<br />
                Web Development Intern @ Korangle
              </p>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Development;
