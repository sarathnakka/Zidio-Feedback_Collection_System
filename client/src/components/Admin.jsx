import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'adminpassword') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
    <div className="left-section">
        <h2>Admin animations should be placed here</h2>
        {/* We can Add colorful abstract background design here */}
        {/* we can use CSS or SVG for the abstract background */}
    </div>
    <div className="right-section">
        <div className="login-form">
            <h2>Admin login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        autoComplete="off"
                        name="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Login
                </button>
            </form>
            
        </div>
    </div>
</div>
);
}

export default Admin;
