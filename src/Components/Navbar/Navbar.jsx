import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../Home';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container p-3">
            <nav className="navbar">
                <div className="logo-container">
                    <img src="./Logo.png" alt="Logo" />
                    <span className="bold-text">Lawliet</span>
                </div>
                <button className="burger-button" onClick={toggleMenu}>☰</button>
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#contain">CONTAIN</a>
                    <a href="#testimonials">TESTIMONIALS</a>
                    <a href="#about">ABOUT</a>
                    <a href="#terms">TERMS</a>
                </div>
                <div className="search-container">
                    <form action="/search">
                        <button type="submit">
                            <img src="https://img.icons8.com/material-outlined/24/000000/search.png" alt="Search"/>
                        </button>
                        
                       <Home/>
                       
                    </form>
                 
                    
                </div>
              
                

            </nav>
        </div>
    );
};

export default Navbar;
