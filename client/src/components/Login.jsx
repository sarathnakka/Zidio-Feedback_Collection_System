import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; 
import web from "../../src/images/love.gif";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
        .then(res => {
            navigate('/options');
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="login-container">
            <div className="left-section">
            <img src={web} className="img-fluid animated" alt="home img"/>
            </div>
            <div className="right-section">
           
                <div className="login-form">
                
                    <h2>Signin </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                            Signin
                        </button>
                    </form>
                    <p>Don't have an account? <Link to="/register" className="link">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
