import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './bootstrap.css';
import './responsive.css';
import sliderImg from '../../src/images/slider-img.png';
import sliderImg2 from '../../src/images/experience-img.jpg';
import aboutImg from '../../src/images/about-img.jpg';
import freelanceImg from '../../src/images/freelance-img.jpg';
import logo from '../../src/images/logo.png';

// import Bars from '..assets/bars.svg'; 


function Home() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
  /*   <div className="landing-page">
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
            <li>
            <Link to="/admin">Admin</Link>
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
    </div> */
      //#region 

      <>
      <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="">
                <img src={logo} alt="" /> &nbsp;
                <span>Feedback Collection System</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="{'navbarSupportedContent'}"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      {" "}
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="work.html">
                      Work{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="category.html">
                      {" "}
                      Category{" "}
                    </a>
                  </li>
                </ul>
                <div className="user_option">
                  <a href="">
                    <span>Login</span>
                  </a>
                  <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    />
                  </form>
                </div>
              </div>
              <div>
                <div className="custom_menu-btn ">
                  <button>
                    <span className=" s-1"></span>
                    <span className="s-2"></span>
                    <span className="s-3"></span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className="slider_section ">
          <div className="carousel_btn-container">
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              >
                01
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to={1}>
                02
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                03
              </li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-5 offset-md-1">
                      <div className="detail-box">
                        <h1>
                          You Can <br />
                          Share Your Experience <br />
                          With Us!
                        </h1>
                        <p>
                         
                        </p>
                        <div className="btn-box">
                          <a href="#about_section layout_padding" className="btn-1">
                            About Us
                          </a>                         
                        </div>
                      </div>
                    </div>
                    <div className="offset-md-1 col-md-4 img-container">
                      <div className="img-box">
                        <img src={sliderImg} alt="slider-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-5 offset-md-1">
                      <div className="detail-box">
                        <h1>
                          Share Your <br />
                          Valuable Review <br />
                          With Us!
                        </h1>
                        <p>
                          
                        </p>
                        <div className="btn-box">
                          <a href="#about_section layout_padding" className="btn-1">
                            About Us
                          </a>
                         
                        </div>
                      </div>
                    </div>
                    <div className="offset-md-1 col-md-4 img-container">
                      <div className="img-box">
                        <img src={sliderImg} alt="sliderImg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>             
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
      {/* experience section */}
      <section className="experience_section layout_padding" style={{background: "white"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="img-box">
                <img src={sliderImg2} alt="img" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Share Your Best Experinced Here</h2>
                </div>
                <p>
                  --__-- 
                </p>
                <div className="btn-box">
                  <a href="/login" className="btn-1">
                    Login
                  </a>
                  <a href="/register" className="btn-2">
                    SignUp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end experience section */}
      {/* category section */}
      {/* <section className="category_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Category</h2>
          </div>
          <div className="category_container">
            <div className="box">
              <div className="img-box">
                <img src="images/c1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Design &amp; Arts</h5>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/c2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Web Development</h5>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/c3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>SEO Markting</h5>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/c4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Video Edting</h5>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/c5.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Logo Design</h5>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/c6.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Game Design</h5>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* end category section */}
      {/* about section */}
      <section className="about_section layout_padding" id='about_section layout_padding' style={{background:'white'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-9 mx-auto">
              <div className="img-box">
                <img src={aboutImg} alt="" />
              </div>
            </div>
          </div>
          <div className="detail-box">
            <h2>About Us</h2>
            <h3>Zidio Web Dev Team 17 - 3 Months</h3>
            <p>
            Teamwork is the ability to work together toward a common vision. <br/>
            The ability to direct individual accomplishments toward organizational objectives.<br/>
             It is the fuel that allows common people to attain uncommon results.
            </p>            
          </div>
        </div>
      </section>
      {/* end about section */}
      {/* freelance section */}
      <section className="freelance_section " style={{background:'white'}}>
        <div id="accordion">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 offset-md-1">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>Team Members</h2>
                  </div>
                  <div className="tab_container">
                    <div
                      className="t-link-box"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      
                      <div className="detail-box">
                        <h5>Bhavesh Sompura</h5>
                       
                      </div>
                    </div>
                    <div
                      className="t-link-box collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >                      
                      <div className="detail-box">
                        <h5>Sarath Nakka</h5>                        
                      </div>
                    </div>
                    <div
                      className="t-link-box collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >                    
                      <div className="detail-box">
                        <h5>Saloni Soni</h5>                        
                      </div>
                    </div>
                    <div
                      className="t-link-box collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >                     
                      <div className="detail-box">
                        <h5>Muntaha Majeed</h5>                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" >
                <div
                  className="collapse show"
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="img-box">
                    <img src={freelanceImg} alt="" />
                  </div>
                </div>
                <div
                  className="collapse"
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="img-box">
                    <img src={freelanceImg} alt="" />
                  </div>
                </div>
                <div
                  className="collapse"
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="img-box">
                    <img src={freelanceImg} alt="" />
                  </div>
                </div>
                <div
                  className="collapse"
                  id="collapseFour"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="img-box">
                    <img src={freelanceImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end freelance section */}      
      {/* info section */}
      <section className="info_section ">
        <div className="info_container layout_padding-top">
          <div className="container">
            <div className="info_top">
              <div className="info_logo">
                <img src={logo} alt="" />
                &nbsp;&nbsp;&nbsp;&nbsp;<span>Zidio - Feedback Collection System</span>
              </div>
              <div className="social_box">
                <a href="#">
                  <img src="images/fb.png" alt="" />
                </a>
                <a href="#">
                  <img src="images/twitter.png" alt="" />
                </a>
                <a href="#">
                  <img src="images/linkedin.png" alt="" />
                </a>
                <a href="#">
                  <img src="images/instagram.png" alt="" />
                </a>
                <a href="#">
                  <img src="images/youtube.png" alt="" />
                </a>
              </div>
            </div>
            <div className="info_main">
              <div className="row">
                <div className="col-md-3 col-lg-2">
                  <div className="info_link-box">
                    <h5>Useful Link</h5>
                    <ul>
                      <li className=" active">
                        <a className="" href="index.html">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="about.html">
                          About{" "}
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="/login">
                          Login
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="/register">
                          Signup
                        </a>
                      </li> 
                      <li className="">
                        <a className="" href="/admin">
                          Admin
                        </a>
                      </li>                      
                    </ul>
                  </div>
                </div>
              
              </div>
            </div>
            <div className="row">
              <div className="col-lg-9 col-md-10 mx-auto">
                <div className="info_contact layout_padding2">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end info section */}
      {/* footer section */}
      <footer className="container-fluid footer_section ">
        <div className="container">
          <p>
            © <span id="displayDate" /> Made With ❤️ 
            
          </p>
        </div>
      </footer>
      {/* end  footer section */}
    </>
    

  );
}

export default Home;