import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('users'); // Default category is 'users'

  const fetchData = async (category) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/${category}`);
      setData(response.data);
      setLoading(false);
      setCategory(category); // Update the category state
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('users');
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li onClick={() => fetchData('users')}>Users</li>
          <li onClick={() => fetchData('feedbacks')}>Feedbacks</li>
          <li onClick={() => fetchData('teacher-feedbacks')}>Teacher Feedbacks</li>
        </ul>
      </div>
      <div className="content">
        <nav className="navbar">
          <div className="navbar-center">Dashboard</div>
        </nav>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {data.map((item, index) => (
              <li key={index}>
              
                {category === 'feedbacks' ? (
                  <>
                    <div>Teacher Name: {item.teacherName}</div>
                    <div>Rating: {item.rating}</div>
                    <div>Review: {item.review}</div>
                  </>
                ) : category === 'teacher-feedbacks' ? (
                  <>
                    <div>Student Name: {item.studentName}</div>
                    <div>Section: {item.section}</div>
                    <div>Review: {item.review}</div>
                  </>
                ) : (
                  <>
                    <div>ID: {item._id}</div>
                    <div>Name: {item.name}</div>
                    <div>Email: {item.email}</div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
