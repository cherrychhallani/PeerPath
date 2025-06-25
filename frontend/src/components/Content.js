import React from 'react';
import '../styles/content.css';

function Content() {
  const categories = [
    {
      title: 'COMPETITIVE CODING',
      link: '/CP',
      img: '/img/collection1.jpg',
    },
    {
      title: 'WEB/APP DEVELOPMENT',
      link: '/DEVELOPMENT',
      img: '/img/collection2.jpg',
    },
    {
      title: 'COLLEGE ACADEMICS',
      link: '/ACADEMICS',
      img: '/img/collection3.jpg',
    },
    {
      title: 'AI/ML AND OTHERS',
      link: '/OTHERS',
      img: '/img/collection4.jpg',
    },
  ];

  return (
    <>
      <div className="section collection">
        <div className="containerr">
          {categories.map((cat, index) => (
            <div className="containerr_card" key={index}>
              <a href={cat.link} className="btn btn-secondary">
                <div
                  className="collection-card"
                  style={{ backgroundImage: `url(${cat.img})` }}
                ></div>
                <h2 className="h4 card-title">{cat.title}</h2>
              </a>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Content;
