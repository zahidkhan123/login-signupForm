import React, { useState, useEffect } from "react";
import axios from "axios";
import "../signup.css";

function SignIn() {
  const [user, setUser] = useState({
    phone: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmission = (e) => {
    e.preventDefault();

    let body = {
      user: {
        email: user.email,
        phone: user.phone,
        password: user.password,
      },
      user_session: {
        device_type: "web",
        device_token: "xxx",
      },
    };
    let headers = {
      Header: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "https://demoapi.gharpar.co/api/v2/user_sessions.json",
        body,
        headers
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <section class="signup">
        <div class="container">
          <div class="signup-content">
            <form onSubmit={onSubmission} id="signup-form" class="signup-form">
              <h2 class="form-title">Login Here</h2>

              <div className="form-group">
                <input
                  type="number"
                  className="form-input"
                  name="phone"
                  value={user.phone}
                  onChange={onInputChange}
                  placeholder="Phone or Email"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="password"
                  value={user.password}
                  onChange={onInputChange}
                  placeholder="Password"
                />
                <span
                  toggle="#password"
                  className="zmdi zmdi-eye field-icon toggle-password"
                ></span>
              </div>

              <div class="form-group">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  class="form-submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
