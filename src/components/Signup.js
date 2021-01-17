import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../signup.css";
import "../images/signup-bg.jpg";
import { Hearing } from "@material-ui/icons";
function Signup() {
  let history = useHistory();
  const [name, setName] = useState("zahid");
  const [user, setUser] = useState({
    fName: "zahid",
    lName: "",
    // email: " ",
    password: " ",
    re_password: "",
    countryCode: "",
    phone: "",
    error: {
      fName: "",
      lName: "",
      // email: " ",
      password: " ",
      re_password: "",
      countryCode: "",
      phone: "",
    },
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    let error = user.error;

    switch (name) {
      case "fName":
        error.fName =
          value.length < 3 ? "name must be greater than 3 words" : " ";
        break;
      case "lName":
        error.lName =
          value.length < 3 ? "name must be greater than 4 words" : " ";
        break;

      case "password":
        error.password =
          value.length < 8 ? "password must be greater than 8 numbers" : " ";
        break;
      case "re_password":
        error.re_password =
          value.length < 8 ? "password must be greater than 8 numbers" : " ";
        break;
      case "countryCode":
        error.countryCode =
          value.length < 3
            ? "country code must be greater than 3 numbers"
            : " ";
        break;
      case "phone":
        error.phone =
          value.length < 3
            ? "phone number must be greater than 9 numbers"
            : " ";
        break;
    }

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      user: {
        first_name: user.fName,
        last_name: user.lName,
        password: user.password,
        password_confirmation: user.re_password,
        country_code: user.countryCode,
        phone: user.phone,
      },
    };

    let headers = {
      Header: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "https://demoapi.gharpar.co/api/v2/registrations.json",
        body,
        headers
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", true);
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
        setUser(err);
      });
    return history.push("/sign-in");
  };

  return (
    <div>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <form
              onSubmit={onSubmitHandler}
              id="signup-form"
              className="signup-form"
            >
              <h2 className="form-title">Create account</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="fName"
                  value={user.fName}
                  onChange={onInputChange}
                  placeholder="First Name"
                  required
                />
                {user?.error?.fName.length > 0 && (
                  <div className="error-color">{user?.error?.fName}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="lName"
                  value={user.lName}
                  onChange={onInputChange}
                  placeholder="Last Name"
                  required
                />
                {user?.error?.lName?.length > 0 && (
                  <div className="error-color">{user?.error?.lName}</div>
                )}
              </div>
              {/* <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  value={user.email}
                  onChange={onInputChange}
                  placeholder="Email"
                />
              </div> */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="password"
                  value={user.password}
                  onChange={onInputChange}
                  placeholder="Password"
                />
                {user?.error?.password?.length > 0 && (
                  <div className="error-color">{user?.error?.password}</div>
                )}
                <span
                  toggle="#password"
                  className="zmdi zmdi-eye field-icon toggle-password"
                ></span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-input"
                  name="re_password"
                  value={user.re_password}
                  onChange={onInputChange}
                  placeholder="confirm password"
                  required
                />
                {user?.error?.re_password?.length > 0 && (
                  <div className="error-color">{user?.error?.re_password}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-input"
                  name="countryCode"
                  value={user.countryCode}
                  onChange={onInputChange}
                  placeholder="Country Code"
                  required
                />
                {user?.error?.countryCode?.length > 0 && (
                  <div className="error-color">{user?.error?.countryCode}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-input"
                  name="phone"
                  value={user.phone}
                  onChange={onInputChange}
                  placeholder="Phone"
                  required
                />
                {user?.error?.phone?.length > 0 && (
                  <div className="error-color">{user?.error?.phone}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="agree-term" className="label-agree-term">
                  I agree all statements in{" "}
                  <Link to="#" className="term-service">
                    Terms of service
                  </Link>
                </label>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  className="form-submit"
                  value="Sign up"
                />
              </div>
            </form>
            <p className="loginhere">
              Have already an account ?{" "}
              <Link to="sign-in" className="loginhere-link">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
