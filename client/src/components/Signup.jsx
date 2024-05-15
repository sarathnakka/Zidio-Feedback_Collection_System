import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Signup.css'; 
import web from "../../src/images/love.gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';



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
            <img src={web} className="img-fluid animated" alt="home img"/>

                
          
            </div>
            <div className="right-section">
            <div className="right-section-corner">
            <Link to="/" className="btn btn-outline-primary">
            <FontAwesomeIcon icon={faHome} /> Home
        </Link></div>
                <div className="signup-form">
                    <h2>Create your Account</h2>
                    
                    <div className="social-login">
                    <button className="btn btn-outline-danger btn-google">
                        <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                    </button>
                    <button className="btn btn-outline-primary btn-facebook">
                        <FontAwesomeIcon icon={faFacebook} /> Sign in with Facebook
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
                    <p>Already Have an Account?
                    <Link to="/login" className="link "> Signin </Link> </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
