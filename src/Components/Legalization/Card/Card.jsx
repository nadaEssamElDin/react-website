import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ imgSrc, imgAlt, title, text }) => {
    return (
      <div className="col-6 col-lg-6">
        <div className="card">
          <div className="card-body">
            <img src={imgSrc} alt={imgAlt} />
            <h2  className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
