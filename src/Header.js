import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const Header = (props) => {
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user'))
  console.info("user++ ",user)


  const onClickLogin = () => {
    navigate('/login')
  }

  const onClickLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div className="main-header">
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope" />{" "}
          <a href="mailto:contact@example.com">cityhospital@example.com</a>
          <i className="bi bi-phone" /> +91 9988776655
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
          <a href="/www.twitter.com" target="_blank" className="twitter">
            <i className="bi bi-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram" />
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
    </div>
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <div className="logo">
          <Link to="/">
            <h1 className="logo me-auto">City</h1>
            <br />
            <h2 className="logo-tiny-text me-auto">
              Multispeciality Hospital
            </h2>
          </Link>
        </div>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/department">
                Departments
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/doctors">
                Doctors
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto " to="/medicines">
                Medicines
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        <Link
          to="/appoinment"
          className="appointment-btn scrollto"
        >
          <span className="d-none d-md-inline">Make an</span>
          Appointment
        </Link>
        {!user && <button onClick={onClickLogin} className="appointment-btn scrollto">
          <span className="d-none d-md-inline">Login/ Signup</span>
        </button>}
        {user && <button onClick={onClickLogout} className="appointment-btn scrollto">
          <span className="d-none d-md-inline">Logout</span>
        </button>}
      </div>
    </header>
  </div>
  );
};

export default Header;
