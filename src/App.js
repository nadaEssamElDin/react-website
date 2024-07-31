import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Components/Navbar/Navbar';
import FirstSection from './Components/FirstSection/FirstSection';
import Legalization from './Components/Legalization/Legalization';
import Counter from './Components/Counter/Counter';
import Question from './Components/Qusetion/Question';
import Footer from './Components/Footer/Footer';
import Testimonial from './Components/Testimonial/Testimonial';
import Dashboard from './pages/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://6581cc393dfdd1b11c443b6d.mockapi.io/test/car')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleUpdate = async (id, updatedItem) => {
    try {
      // Send PUT request to update the item
      await axios.put(`https://6581cc393dfdd1b11c443b6d.mockapi.io/test/car/${id}`, updatedItem);
      
      // Update item in local state
      setData(data.map(item => (item.id === id ? { ...item, ...updatedItem } : item)));
    } catch (error) {
      alert("Error updating item: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Show a confirmation dialog
      const isConfirmed = window.confirm("Are you sure you want to delete this item?");
      
      if (isConfirmed) {
        // Remove item from local state
        setData(data.filter(item => item.id !== id));
        // Send DELETE request to the API
        await axios.delete(`https://6581cc393dfdd1b11c443b6d.mockapi.io/test/car/${id}`);
      }
    } catch (error) {
      alert("Error deleting item: " + error.message);
    }
  };
  

  const handleAdd = async (newItem) => {
    try {
     
      const response = await axios.post('https://6581cc393dfdd1b11c443b6d.mockapi.io/test/car/', newItem);
      
  
      const createdItem = response.data;
      
    
      setData([...data, createdItem]);
    } catch (error) {
      console.error('Error adding item:', error);
     
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard data={data} onUpdate={handleUpdate} onDelete={handleDelete} onAdd={handleAdd} />} />
          <Route path="/" element={
            <>
              <Navbar/>
              <FirstSection/>
              <Legalization/>
              <Counter/>
              <Testimonial data={data} loading={loading} error={error} />
              <Question/>
              <Footer/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
