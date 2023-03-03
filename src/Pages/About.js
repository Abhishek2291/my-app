import React from "react";

const About = (props) => {
  return (
    <div>
      <div className="main-header">
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope" />{" "}
              <a href="mailto:contact@example.com">cityhospital@example.com</a>
              <i className="bi bi-phone" /> +91 9988776655
            </div>
            <div className="d-none d-lg-flex social-links align-items-center">
              <a href="#" className="twitter">
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
              <a href="../index.html">
                <h1 className="logo me-auto">City</h1>
                <br />
                <h2 className="logo-tiny-text me-auto">
                  Multispeciality Hospital
                </h2>
              </a>
            </div>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a className="nav-link scrollto" href="../index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="./departments.html">
                    Departments
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="./doctors.html">
                    Doctors
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto active" href="./about.html">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="./contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            <a href="./appointment.html" className="appointment-btn scrollto">
              <span className="d-none d-md-inline">Make an</span>
              Appointment
            </a>
          </div>
        </header>
      </div>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center px-lg-5 abouttop">
              <h3>Fusce nec risus at enim congue bibendum quis at augue. </h3>
              <p>
                Proin tincidunt blandit fermentum. Ut gravida arcu non mi
                dapibus ullamcorper. Curabitur mollis, turpis eu pellentesque
                finibus, nisi ex mattis quam, mollis aliquet mi massa non nunc.
                Pellentesque id felis elit. Pellentesque blandit sem a nisi
                dictum, in pretium ante tincidunt.
              </p>
              <p>
                Maecenas lobortis, nunc eu porttitor posuere, neque lectus
                rutrum leo, sit amet rutrum orci eros aliquam mauris. Aliquam
                erat volutpat. Aenean eget dui ac lectus rutrum aliquam pulvinar
                ut massa. Duis sagittis rutrum neque, quis tincidunt arcu
                pretium ac. Suspendisse sem{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div>
              <h4>Address</h4>
              <p>
                F-505, <br />
                Inovative Plazza
                <br />
                New Delhi, India
                <br />
                <br />
                <strong>Phone:</strong> +91 9988776655
                <br />
                <strong>Email:</strong> cityhospital@example.com
                <br />
              </p>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram" />
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype" />
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
      </footer>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </div>
  );
};

export default About;
