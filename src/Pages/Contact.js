import React from 'react'

const Contact = () => {
  return (
    <div>
  <div className="main-header">
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
          <i className="bi bi-phone" /> +91 9988776655
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
          <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
          <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
          <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
        </div>
      </div>
    </div>
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <div className="logo">
          <a href="../index.html">
            <h1 className="logo me-auto">City</h1><br />
            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
          </a>
        </div>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto" href="../index.html">Home</a></li>
            <li><a className="nav-link scrollto" href="./departments.html">Departments</a></li>
            <li><a className="nav-link scrollto" href="./doctors.html">Doctors</a></li>
            <li><a className="nav-link scrollto" href="./about.html">About</a></li>
            <li><a className="nav-link scrollto active" href="./contact.html">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        <a href="./appointment.html" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
          Appointment</a>
      </div>
    </header>
  </div>
  <section id="contact" className="contact">
    <div className="container">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
          blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
          luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
      </div>
    </div>
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt" />
              <h4>Location:</h4>
              <p> F-505, Inovative Plazza New Delhi, India</p>
            </div>
            <div className="email">
              <i className="bi bi-envelope" />
              <h4>Email:</h4>
              <p>cityhospital@example.com</p>
            </div>
            <div className="phone">
              <i className="bi bi-phone" />
              <h4>Call:</h4>
              <p>+91 9988776655</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mt-5 mt-lg-0">
          <form action method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
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
            Inovative Plazza<br />
            New Delhi, India<br /><br />
            <strong>Phone:</strong> +91 9988776655<br />
            <strong>Email:</strong> cityhospital@example.com<br />
          </p>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
      </div>
    </div>
  </footer>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
</div>

  )
}

export default Contact