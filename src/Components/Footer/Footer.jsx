import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 footer-col">
            <div className="footer-logo">
              <img src="./Logo1.png" alt="Logo" />
              <span className="bold-text">Lawliet</span>
            </div>
          </div>
          <div className="col-md-2 footer-col">
            <h6>Product</h6>
            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Releases</a></li>
            </ul>
          </div>
          <div className="col-md-2 footer-col">
            <h6>Company</h6>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className="col-md-2 footer-col">
            <h6>Support</h6>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="rights">
          <div className="rights_text">
            © 2021 Lawliet. All rights reserved
          </div>
          <div className="social-icons">
            <a href="#">
              <img src="./Social_Icons.png" className="footer-links" alt="Social Link 1" />
            </a>
            <a href="#">
              <img src="./Social_Icons1.png" className="footer-links" alt="Social Link 2" />
            </a>
            <a href="#">
              <img src="./Social_Icons2.png" className="footer-links" alt="Social Link 3" />
            </a>
            <a href="#">
              <img src="./Social_Icons3.png" className="footer-links" alt="Social Link 4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
