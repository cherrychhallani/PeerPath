// src/pages/Intern.js
import React from 'react';
import '../styles/category.css';

function Intern() {
  return (
    <div>
      <div className="heading">
        <h2><b>INTERN EXPERIENCED MENTORS</b></h2>
      </div>

      <div className="category">
        <div className="products section container" id="products">
          <div className="products__container grid">
            <div className="products__card" onClick={() => window.open("./contentDetails.html", "_blank")} style={{ height: '300px' }}>
              <img src="/img/Mehak Gupta.jpeg" alt="" className="products__img" />
              <h3 className="products__title">MEHAK GUPTA</h3>
              <span className="products__price">Ex SDE Intern @Flipkart</span>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div className="products__card" onClick={() => window.open("./contentDetails.html", "_blank")} style={{ height: '300px' }}>
              <img src="/img/Rishika Agarwal.jpeg" alt="" className="products__img" />
              <h3 className="products__title">RISHIKA AGRAWAL</h3>
              <span className="products__price">Mentee Desis Ascend Educare D. E. Shaw</span>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div className="products__card" onClick={() => window.open("./contentDetails.html", "_blank")} style={{ height: '300px' }}>
              <img src="/img/Vipul Ranjan Sahu.jpeg" alt="" className="products__img" />
              <h3 className="products__title">Vipul Ranjan Sahu</h3>
              <span className="products__price">Ex-SWE intern @Atlassian</span>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div className="products__card" onClick={() => window.open("./contentDetails.html", "_blank")} style={{ height: '300px' }}>
              <img src="/img/Shivani Pal.jpeg" alt="" className="products__img" />
              <h3 className="products__title">Shivani Pal</h3>
              <span className="products__price">Upcoming Intern '24 @Microsoft</span>
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

export default Intern;
