import React from "react";
import { Formik } from "formik";
import "./Login.css";
import Logo from "../../assets/nav-logo.png";
import GoogleIcon from "../../assets/google-icon.png";
import Fbicon from "../../assets/fb-icon.png";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="img">
            <img src={Logo} alt="logo" className="logo" />
          </div>
          <h1>
            Welcome to <span>Onifood</span>
          </h1>
          <Formik
            className="formik"
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Require";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />{" "}
                <br />
                {errors.email && touched.email && errors.email}
                <input
                  type="password"
                  className="input-password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p>forgot your password ?</p>
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting} className="btn">
                  Log in
                </button>
                <h2 className="or">OR</h2>
                <div className="continueWithSocial">
                  <img src={GoogleIcon} alt="" className="social-icon" />
                  <p>Continue with Google</p>
                </div>
                <div className="continueWithSocial continueWithSocial2">
                  <img src={Fbicon} alt="" className="social-icon" />
                  <p>Continue with Facebook</p>
                </div>
                <hr />
                <h3>
                  Not on <span>Onifood?</span> Sign up
                </h3>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
