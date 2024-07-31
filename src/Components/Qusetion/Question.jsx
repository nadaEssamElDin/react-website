import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


const Question = () => {

    return (
    
<div className="container-fluid">
    <div className="container">
        <div className="complex_question">
            <div className="text">
                <h1>Complex Question?</h1>
                <p>Request for a personalized budget for your legal problem. We will send you a coupe options in 24 hours. You can have free consult , if a our first customer</p>
                <a href="tel:+1234567890" className="call-now-btn">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="Phone Icon"/> 
                    Call now
                </a>
            </div>
            <img src="./Group30.png" alt="image"/>
        </div>
    </div>
    </div>
    

    );
};

export default Question;
