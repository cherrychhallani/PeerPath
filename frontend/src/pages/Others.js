// src/pages/Others.js
import React from 'react';
import '../styles/category.css';

function Others() {
  return (
    <div>
      <div className="heading">
        <h2><b>MENTORS</b></h2>
      </div>

      <div className="category">
        <div className="products section container" id="products">
          <div className="products__container grid">
            <div
              className="products__card"
              onClick={() => window.open("./contentDetails.html", "_blank")}
            >
              <div className="available-sign"></div>
              <img src="/img/Tejas Sharma.jpeg" alt="" className="products__img" />
              <h3 className="products__title">Tejas Sharma</h3>
              <span className="products__price">2<sup>nd</sup> Year</span>
              <p className="products__description">
                Member - GeekHaven
                <br /> (AI-ML Member)
                <br /> Specialist @ Codeforces
                <br /> Knight @ LeetCode
                <br /> TEDx Speaker
              </p>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div
              className="products__card"
              onClick={() => window.open("./contentDetails.html", "_blank")}
            >
              <img src="/img/Jai Khanna.jpeg" alt="" className="products__img" />
              <h3 className="products__title">Jai Khanna</h3>
              <span className="products__price">2<sup>nd</sup> Year</span>
              <p className="products__description">
                Cyber Security Wing Member<br />
                GeekHaven<br />
                Web Development Intern<br />
                YHills
              </p>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div
              className="products__card"
              onClick={() => window.open("./contentDetails.html", "_blank")}
            >
              <div className="available-sign"></div>
              <img src="/img/profile.jpeg" alt="" className="products__img" />
              <h3 className="products__title">Mukul Singhal</h3>
              <span className="products__price">2<sup>nd</sup> Year</span>
              <p className="products__description">All-Rounder</p>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div
              className="products__card"
              onClick={() => window.open("./contentDetails.html", "_blank")}
            >
              <img src="/img/swaroop.jpeg" alt="" className="products__img" />
              <h3 className="products__title">Swaroop Dora</h3>
              <span className="products__price">2<sup>nd</sup> Year</span>
              <p className="products__description">
                Junior Researcher C3i Hub<br />
                Member, GeekHaven<br />
                Full Stack Developer
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

export default Others;
