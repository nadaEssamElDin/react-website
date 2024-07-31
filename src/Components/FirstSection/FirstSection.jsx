import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const FirstSection = () => {

    return(
        <>
        <div className="container">
            <div className="new-section">
                <span className="badge">New</span>
                <span className="content">Stay connected to the upcoming & Recent jobs</span>
            </div>
        </div>
        <div className="container">
            <div className="first-body">
                <div className="first-body-text">
                    <h1 className="title"><span style={{ whiteSpace: 'nowrap' }}>Your Solution <br /> Legal Consultancy</span></h1>
                    <p className="body1">We are here to help you take care of your legality with the best service especially for you.</p>
                </div>
                <div>
                    <img src="./Hero_Image.png" alt="Logo" className="hero" />
                    <div className="square-box">
                        <h3>Tiara Andini</h3>
                        <p>- Lawyer</p>
                    </div>
                </div>
            </div>
            <div className="started">
                <a href="#" className="btn-custom">GET STARTED</a>
                <div className="company-logos">
                    <p className="trusted-by">Trusted by 10+ companies in Indonesia</p>
                    <img src="./comp.png" alt="Company Logos" />
                </div>
            </div>
        </div>
    </>
);
};


export default FirstSection;