import React from 'react';
import '../styles/category.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';
import 'slick-carousel';
import { useEffect } from 'react';


function Academics() {
  useEffect(() => {
    $('#containerSlider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    });
  }, []);

  return (
    <>
      

      <div className="heading">
        <h2><b>ACADEMIC MENTORS</b></h2>
      </div>

      <div className="category">
        <div className="products section container" id="products">
          <div className="products__container grid">

            <div className="products__card" style={{ height: '300px' }} onClick={() => window.open('./contentDetails.html', '_blank')}>
              <img src="/img/profile.jpeg" alt="" className="products__img" />
              <h3 className="products__title">PRAJWAL AGRAWAL</h3>
              <span className="products__price">CGPA: 9.15</span>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div className="products__card" style={{ height: '300px' }} onClick={() => window.open('./contentDetails.html', '_blank')}>
              <img src="/img/Aryan Shah.jpeg" alt="" className="products__img" />
              <h3 className="products__title">ARYAN SHAH</h3>
              <span className="products__price">CGPA: 9.01</span>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div className="products__card" style={{ height: '300px' }} onClick={() => window.open('./contentDetails.html', '_blank')}>
              <img src="/img/profile.jpeg" alt="" className="products__img" />
              <h3 className="products__title">ADITYA BHARADWAJ</h3>
              <span className="products__price">CGPA: 8.95</span>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

            <div className="products__card" style={{ height: '300px' }} onClick={() => window.open('./contentDetails.html', '_blank')}>
              <img src="/img/Rishika Agarwal.jpeg" alt="" className="products__img" />
              <h3 className="products__title">RISHIKA AGRAWAL</h3>
              <span className="products__price">CGPA: 8.35</span>
              <button className="products__button">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </button>
            </div>

          </div>
        </div>
      </div>

      
    </>
  );
}

export default Academics;
