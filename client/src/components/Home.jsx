import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import Bars from '..assets/bars.svg'; 


function Home() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          <h1>Feedback System</h1>
        </div>

        {mobile && (
          <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
            
          </div>
        )}
        {!mobile && (
          <ul className="header-menu">
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </header>
        
      <div className="hero-section">
        <div className="hero-content">
          <h2>Unleash the Power of Feedback</h2>
          <p>Animations and background images should here in our feedback system.</p>
          <Link to="/register" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
      

      {mobile && menuOpened && (
        <ul className="mobile-menu">
          <li>
            <Link to="/register" onClick={() => setMenuOpened(false)}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setMenuOpened(false)}>
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Home;