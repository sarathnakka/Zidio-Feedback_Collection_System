import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Twomonths.css';

function Twomonths() {
  const [feedback, setFeedback] = useState({
    applicantName: '', 
    batchNumber: '',
    projectName: '',
    satisfaction: '', 
    improvement: [], 
    suggestions: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const isChecked = e.target.checked;
      setFeedback(prevState => ({
        ...prevState,
        improvement: isChecked
          ? [...prevState.improvement, value]
          : prevState.improvement.filter(item => item !== value)
      }));
    } else {
      setFeedback(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/submit-twomonths-feedback', feedback)
      .then(response => {
        console.log(response.data);
        setFeedback({
          applicantName: '', 
          batchNumber: '', 
          projectName: '', 
          satisfaction: '', 
          improvement: [], 
          suggestions: '' 
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
                <label htmlFor="applicantName">Applicant Name:</label>
                <input
                  type="text"
                  name="applicantName"
                  value={feedback.applicantName}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="batchNumber">Batch Number:</label>
                <input
                  type="text"
                  name="batchNumber"
                  value={feedback.batchNumber}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectName">Project Name:</label>
                <input
                  type="text"
                  name="projectName"
                  value={feedback.projectName}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="satisfaction">How satisfied are you with the training program?</label><br />
                <input
                  type="radio"
                  name="satisfaction"
                  value="Very Satisfied"
                  onChange={handleChange}
                  required
                /> Very Satisfied
                <input
                  type="radio"
                  name="satisfaction"
                  value="Satisfied"
                  onChange={handleChange}
                /> Satisfied
                <input
                  type="radio"
                  name="satisfaction"
                  value="Neutral"
                  onChange={handleChange}
                /> Neutral
                <input
                  type="radio"
                  name="satisfaction"
                  value="Dissatisfied"
                  onChange={handleChange}
                /> Dissatisfied
              </div>
              <div className="form-group">
                <label>What could be improved?</label>
                <input
                  type="checkbox"
                  name="improvement"
                  value="Course"
                  onChange={handleChange}
                /> Course
                <input
                  type="checkbox"
                  name="improvement"
                  value="Content"
                  onChange={handleChange}
                /> Content
                <input
                  type="checkbox"
                  name="improvement"
                  value="Instructor"
                  onChange={handleChange}
                /> Instructor
                <input
                  type="checkbox"
                  name="improvement"
                  value="Facilities"
                  onChange={handleChange}
                /> Facilities
              </div>
              <div className="form-group">
                <label htmlFor="suggestions">Any suggestions for improving the Internship?</label>
                <textarea
                  name="suggestions"
                  value={feedback.suggestions}
                  onChange={handleChange}
                  className="form-control"
                  rows="2"
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

export default Twomonths;
