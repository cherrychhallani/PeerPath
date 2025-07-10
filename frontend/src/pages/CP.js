import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/category.css';
import '../styles/content.css'; // if needed for extra styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';



function CP() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="heading">
        <h2><b>COMPETITIVE CODING MENTORS</b></h2>
      </div>

      <div className="category">
        <div className="products section container" id="products">
          <div className="products__container grid">
            <div className="products__card">
              <img src="/img/srijan.jpeg" alt="Srijan" className="products__img" />
              <h3 className="products__title">Srijan Jain</h3>
              <span className="products__price">2<sup>nd</sup> Year</span>
              <p className="products__description">
                Expert @Codeforces <br />
                5⭐ Codechef <br />
                Member - GeekHaven <br />
                <a href="https://in.linkedin.com/in/srijan-jain-718987192" style={{ color: 'black' }}>@linkedin</a>
              </p>
              <button className="products__button">
                <FontAwesomeIcon icon={faComments} />
              </button>
            </div>

            <div
  className="products__card"
  onClick={() => navigate("/profile/ishaan")}
>
  <div className="available-sign"></div>
  <img src="/img/profile.jpeg" alt="Ishaan" className="products__img" />
  <h3 className="products__title">Ishaan Oberoi</h3>
  <span className="products__price">3<sup>rd</sup> Year</span>
  <p className="products__description">
    Asia West Finalist <br />
    Expert @codeforces <br />
    5⭐ at codechef <br />
    Guardian @Leetcode (2583)(AIR 30)
  </p>
  <button
    className="products__button"
    onClick={(e) => {
      e.stopPropagation();
      window.open("https://in.linkedin.com/in/srijan-jain-718987192", "_blank");
    }}
  >
    <FontAwesomeIcon icon={faComments} />
  </button>
</div>



            <div className="products__card" onClick={() => window.open("./contentDetails.html", "_blank") }>
              <img src="/img/priyanshu.jpeg" alt="Priyanshu" className="products__img" />
              <h3 className="products__title">Priyanshu Sobti</h3>
              <span className="products__price">3<sup>rd</sup> Year</span>
              <p className="products__description">
                Expert @Codeforces <br />
                4⭐ @CodeChef <br />
                Knight @LeetCode <br />
                President @NewGen IEDC
              </p>
              <button className="products__button">
                <FontAwesomeIcon icon={faComments} />
              </button>
            </div>

            <div className="products__card" onClick={() => navigate("/agrim")}>
              <div className="available-sign"></div>
              <img src="/img/profile.jpeg" alt="Agrim" className="products__img" />
              <h3 className="products__title">Agrim Nauriyal</h3>
              <span className="products__price">2<sup>nd</sup> Year</span>
              <p className="products__description">
                ICPC Regionalist <br />
                Expert on @CodeForces <br />
                5 ⭐ on @CodeChef <br />
                Guardian on @LeetCode <br />
                Member - GeekHaven
              </p>
              <button className="products__button">
                <FontAwesomeIcon icon={faComments} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CP;
