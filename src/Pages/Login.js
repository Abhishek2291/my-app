import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

  const onSubmitHandler = (values) => {
    localStorage.setItem('user',JSON.stringify(values))
    navigate('/')
  };

  const contactusSchema = Yup.object().shape({
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    email: Yup.string()
      .email("Invalid email")
      .matches(/@[^.]*\./, "Invalid email address")
      .required("Email is required"),
  });

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-6 card p-4">
          <Formik
            initialValues={{
              password: "",
              email: "",
            }}
            validationSchema={contactusSchema}
            onSubmit={onSubmitHandler}
          >
            {({ errors, touched }) => (
              <Form className="php-email-form">
                <div className="row">
                  <div className=" form-group mt-3 mt-md-0">
                    <Field
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                    <ErrorMessage
                      component="span"
                      className="text-danger"
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <Field
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="password"
                  />
                </div>
                <div className="text-center">
                  <button className="btn my-2 appointment-btn btn-primary" type="submit">Login</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
