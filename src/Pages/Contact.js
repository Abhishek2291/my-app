import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const [isDisplay, setisDisplay] = useState(true);

  const onChangeRadio = () => {
    setisDisplay(!isDisplay);
  };

  const onSubmitHandler = (values) => {
    // event.preventDefault();

    // const data = {
    //   username: event.target.name.value,
    //   email: event.target.email.value,
    //   subject: event.target.subject.value,
    //   message: event.target.message.value,
    // };

    console.info("data++ ", values);
  };

  const contactusSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short!")
      .required("Name is required  "),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet
              aliquet rhoncus quis, luctus at neque. Mauris sit amet massa sed
              orci vehicula facilisis.
            </p>
          </div>
        </div>
        <input
          type="radio"
          name="display"
          onChange={onChangeRadio}
          value={isDisplay}
          checked={isDisplay === true}
        />{" "}
        display <br />
        <input
          type="radio"
          name="display"
          onChange={onChangeRadio}
          value={isDisplay}
          checked={isDisplay === false}
        />{" "}
        hide
        {isDisplay === true && (
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
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  }}
                  validationSchema={contactusSchema}
                  onSubmit={onSubmitHandler}
                >
                  {({ errors, touched }) => (
                    <Form className="php-email-form">
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <Field
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                          {errors.name && touched.name ? (
                            <div className="text-danger">{errors.name}</div>
                          ) : null}
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <Field
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                          />
                          {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <Field
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="form-group mt-3">
                        <Field
                          className="form-control"
                          name="message"
                          rows={5}
                          placeholder="Message"
                        />
                      </div>
                      <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        )}
        {isDisplay === false && <h2>Unable to display</h2>}
      </section>
    </div>
  );
};

export default Contact;
