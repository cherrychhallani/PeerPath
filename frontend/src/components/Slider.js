import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import '../styles/slider.css'; // Make sure to create this CSS file

function Slider() {
  useEffect(() => {
    $('#containerSlider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }, []);

  return (
    <section>
      <div id="containerSlider">
        <div id="slidingImage"><img src="/img/img3.jpg" alt="image3" /></div>
        <div id="slidingImage"><img src="/img/img1.png" alt="image1" /></div>
        <div id="slidingImage"><img src="/img/img2.jpg" alt="image2" /></div>
        <div id="slidingImage"><img src="/img/img4.jpg" alt="image4" /></div>
      </div>
    </section>
  );
}

export default Slider;
