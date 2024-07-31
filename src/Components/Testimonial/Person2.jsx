import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Person2 = ({ title, text, rating, author, position, image }) => {
  const renderStars = (rating) => {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? '★' : '☆';
    }
    return stars;
  };
    return (
        <div class="col-md-6 col-12">
              <div className="testimonial-card2">
              <h5>{title}</h5>
              <p>{text}</p>
              <div style={{color: 'gold'}}>{renderStars(rating)}</div>
        <div className="testimonial-author">
          <img src={image} alt={author} width="100" height="100" />
          <div>
            <div className="testimonial-name">{author}</div>
            <div className="testimonial-position">{position}</div>
          </div>
        </div>
      </div>

        </div>
    
    );
  };
  
  export default Person2;