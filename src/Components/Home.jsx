import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom'; // Import Link here
const Home = () => {
 
    return (      
                        <Link to="/dashboard">
                         <img src="https://img.icons8.com/material-outlined/24/000000/home.png" alt="Dashboard" />
                         </Link>
    );
};

export default Home;
