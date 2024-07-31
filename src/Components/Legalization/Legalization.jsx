import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card/Card';



const Legalization = () => {

    return (
        <div className="legalization py-5">
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="legalization-text">
                            <h3 >Why do we help with legalization?</h3>
                            <p>We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-7">
                    <div class="row legalization-content">
                   <Card imgSrc="./Circle_Layer.png" imgAlt="Circle Layer" title="Environmental Law"  text="Environmental legal issues might occur since the planned business activities are designed"/>
                   <Card imgSrc="./Bag.png" imgAlt="Bag" title="Corporate and Commercial"  text="We provide a complete range of services for the continuity of your business activities."/>
                   <Card imgSrc="./Rocket.png" imgAlt="Rocket" title="Information and Technology"  text="DIT not followed by the existing regulation which might cause legal uncertainty and business uncertainty."/>
                   <Card imgSrc="./User_Arrows.png" imgAlt="Arrows" title="Other Services"  text="In dealing with disruptive economic and legal challenges, our firm also provide various legal services."/>
                </div>
            </div>
            </div>
            </div>
    </div>
</div>
    );
};

export default Legalization;
