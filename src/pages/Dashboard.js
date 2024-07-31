import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ data, onUpdate, onDelete, onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({
    img: '',
    title: '',
    description: '',
    rating: '',
    name: '',
    jobtitle: ''
  });

  const [editItem, setEditItem] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newItem.rating < 1 || newItem.rating > 5) {
      alert("Rating must be between 1 and 5.");
      return;
    }
    onAdd(newItem);
    setShowForm(false);
    setNewItem({
      img: '',
      title: '', /*after submit delete the values  */ 
      description: '',
      rating: '',
      name: '',
      jobtitle: ''
    });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditItem({ ...editItem, [name]: value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
   
    if (editItem.rating > 5) {
      editItem.rating = editItem.rating % 5;
    }
    onUpdate(editItem.id, editItem);
    setShowEditForm(false);
    setEditItem(null);
  };

  const renderStars = (rating) => {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? '★' : '☆';
    }
    return <span className="rating-stars">{stars}</span>;
  };

  return (
    <div className="dashboard">
      <div className="add">
        <h1>Dashboard</h1>
        <button className="add-button" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add +'}
        </button>
      </div>

      {showForm && (
        <form className="dashboard-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={newItem.img}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newItem.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newItem.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={newItem.rating}
            onChange={handleInputChange}
            min="1"
            max="5"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newItem.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="jobtitle"
            placeholder="Job Title"
            value={newItem.jobtitle}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}

      {showEditForm && editItem && (
        <form className="dashboard-form" onSubmit={handleUpdateSubmit}>
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={editItem.img}
            onChange={handleUpdateChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={editItem.title}
            onChange={handleUpdateChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={editItem.description}
            onChange={handleUpdateChange}
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={editItem.rating}
            onChange={handleUpdateChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={editItem.name}
            onChange={handleUpdateChange}
            required
          />
          <input
            type="text"
            name="jobtitle"
            placeholder="Job Title"
            value={editItem.jobtitle}
            onChange={handleUpdateChange}
            required
          />
          <button type="submit" className="submit-button">Update</button>
        </form>
      )}

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>img</th>
            <th>title</th>
            <th>description</th>
            <th>rating</th>
            <th>name</th>
            <th>jobtitle</th>
            <th style={{ fontWeight: 'bold', fontSize: '18px', color: 'blue' }}>Update</th>
            <th style={{ fontWeight: 'bold', fontSize: '18px', color: 'red' }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt={item.title} className="dashboard-img" />
              </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td className="rating-stars">
                {renderStars(item.rating)}
              </td>
              <td>{item.name}</td>
              <td>{item.jobtitle}</td>
              <td>
                <button className="update-button" onClick={() => { setEditItem(item); setShowEditForm(true); }}>Update</button>
              </td>
              <td>
                <button className="delete-button" onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
