import React from 'react';
import { Link } from 'react-router-dom';
import './Options.css';

function Options() {
  return (
    <div className="options-container">
      <div className="main-card">
        <h2>Choose Your Role</h2>
        <div className="role-cards">
          <div className="role-card student-card">
            <h3>Student</h3>
            <Link to="/student" className="btn btn-primary">
              Feedback Form
            </Link>
          </div>
          <div className="role-card teacher-card">
            <h3>Teacher</h3>
            <Link to="/teacher" className="btn btn-primary">
              Feedback Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options;