import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Person from './Person';
import Person2 from './Person2';
import PersonMobile from './PersonMobile';
import './custom.css'; 


const Testimonial = ({ data, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Group testimonials into pairs
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

  return (
    <>
      <div className="testimonial-section">
        <div className="container-fluid">
          <div className="container">
            <div className="testimonial-title">Clients Testimonial</div>
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {groupedData.map((group, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <div className="row">
                      {group.map((testimonial, idx) => (
                        idx === 0 ? (
                          <Person
                            key={testimonial.id}
                            title={testimonial.title}
                            text={testimonial.description}
                            rating={testimonial.rating}
                            author={testimonial.name}
                            position={testimonial.jobtitle}
                            image={testimonial.img}
                          />
                        ) : (
                          <Person2
                            key={testimonial.id}
                            title={testimonial.title}
                            text={testimonial.description}
                            rating={testimonial.rating}
                            author={testimonial.name}
                            position={testimonial.jobtitle}
                            image={testimonial.img}
                          />
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className="testimonial-section-mobile">
          <div className="container">
            <div className="testimonial-title">Clients Testimonial</div>
            <div className="testimonial-container">
              {data.map((testimonial) => (
                <PersonMobile
                  key={testimonial.id}
                  title={testimonial.title}
                  text={testimonial.description}
                  rating={testimonial.rating}
                  author={testimonial.name}
                  position={testimonial.jobtitle}
                  image={testimonial.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
