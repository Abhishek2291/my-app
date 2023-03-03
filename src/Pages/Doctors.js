import React from "react";

const Doctors = () => {
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
                  <a className="nav-link scrollto active" href="./doctors.html">
                    Doctors
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="./about.html">
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
      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-title">
            <h2>Doctors</h2>
            <p>
              Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.
              Suspendisse sem risus, molestie vitae arcu et, tincidunt viverra
              erat. Quisque in lectus id nulla viverra sodales in a risus.
              Aliquam ut sem ex. Duis viverra ipsum lacus, ut pharetra arcu
              sagittis nec. Phasellus a eleifend elit.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="../assets/img/doctors/doctors-1.jpg"
                    className="img-doctor"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>Atha Smith</h4>
                  <span>Chief Medical Officer</span>
                  <p>
                    Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.
                  </p>
                  <div className="social">
                    <a href>
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href>
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href>
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href>
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="../assets/img/doctors/doctors-2.jpg"
                    className="img-doctor"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>John White</h4>
                  <span>Anesthesiologist</span>
                  <p>Aenean ac turpis ante. Mauris velit sapien.</p>
                  <div className="social">
                    <a href>
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href>
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href>
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href>
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="../assets/img/doctors/doctors-3.jpg"
                    className="img-doctor"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>Umika Loha</h4>
                  <span>Cardiology</span>
                  <p>Curabitur luctus eleifend odio. Phasellus placerat mi.</p>
                  <div className="social">
                    <a href>
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href>
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href>
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href>
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="../assets/img/doctors/doctors-4.jpg"
                    className="img-doctor"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>Daimy Smith</h4>
                  <span>Neurosurgeon</span>
                  <p>
                    Morbi vulputate, tortor nec pellentesque molestie, eros nisi
                    ornare purus.
                  </p>
                  <div className="social">
                    <a href>
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href>
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href>
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href>
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
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

export default Doctors;
