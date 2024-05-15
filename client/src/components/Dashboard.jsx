import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('feedbacks'); 

  const fetchData = async (category) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/${category}`);
      setData(response.data);
      setLoading(false);
      setCategory(category);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('feedbacks'); 
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li onClick={() => fetchData('users')}>Users</li>
          <li onClick={() => fetchData('feedbacks')}>One Month Team</li>
          <li onClick={() => fetchData('teacher-feedbacks')}>Three Month's Team</li>
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
                {/* Updated content based on the selected category */}
                {category === 'feedbacks' ? (
                  <>
                    <div>Applicant Name: {item.applicantName}</div>
                    <div>Batch Number: {item.batchNumber}</div>
                    <div>Project Name: {item.projectName}</div>
                    <div>Satisfaction: {item.satisfaction}</div>
                    <div>Improvement: {item.improvement.join(', ')}</div>
                    <div>Suggestions: {item.suggestions}</div>
                  </>
                ) : category === 'teacher-feedbacks' ? (
                  <>
    <div>Applicant Name: {item.applicantName}</div>
    <div>Batch Number: {item.batchNumber}</div>
    <div>Project Name: {item.projectName}</div>
    <div>Satisfaction: {item.satisfaction}</div>
    <div>Improvement: {item.improvement.join(', ')}</div>
    <div>Suggestions: {item.suggestions}</div>
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
