import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'; 

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="signup-container">
            <div className="left-section">
                <h2>Signup animations should be placed here</h2>
                {/* We can Add colorful abstract background design here */}
                {/* we can use CSS or SVG for the abstract background */}
            </div>
            <div className="right-section">
                <div className="signup-form">
                    <h2>Create your Account</h2>
                    
                    <div className="social-login">
                    <button className="btn btn-google">
                      <i className="fab fa-google"></i> Sign in with Google
                    </button>
                    <button className="btn btn-facebook">
                      <i className="fab fa-facebook"></i> Sign in with Facebook
                    </button>
                  </div>
                    
                    <p className="or-text">or Sign in using your email address</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                autoComplete="off"
                                name="name"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control"
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                            Signup
                        </button>
                    </form>
                    <p>Already Have an Account?</p>
                    <Link to="/login" className="btn btn-outline-primary "> Signin
                       
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
