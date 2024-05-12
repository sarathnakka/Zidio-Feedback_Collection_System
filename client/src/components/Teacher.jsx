import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Teacher.css'; 

function Teacher() {
  const [feedback, setFeedback] = useState({
    studentName: '',
    section: '',
    review: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/submit-teacher-feedback', feedback)
      .then(response => {
        console.log(response.data);
        setFeedback({
          studentName: '',
          section: '',
          review: ''
        });
        setSubmitted(true);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="home-container">
      {submitted ? (
        <>
          <h2>Thank you for your review!</h2>
          <Link to="/" className="btn btn-primary mt-3">Logout</Link>
        </>
      ) : (
        <>
          <h2>Feedback Form</h2>
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="studentName">Student Name:</label>
                <input
                  type="text"
                  name="studentName"
                  value={feedback.studentName}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="section">Section:</label>
                <select
                  name="section"
                  value={feedback.section}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="review">Review:</label>
                <textarea
                  name="review"
                  value={feedback.review}
                  onChange={handleChange}
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Teacher;
