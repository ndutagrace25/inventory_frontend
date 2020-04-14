import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                  <img
                    src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png"
                    className="brand_logo"
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center form_container">
                <form>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="far fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name=""
                      className="form-control input_user"
                      value=""
                      placeholder="username"
                    />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      name=""
                      className="form-control input_pass"
                      value=""
                      placeholder="password"
                    />
                  </div>
                  {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customControlInline"
                      />
                      <label
                        className="custom-control-label"
                        for="customControlInline"
                      >
                        Remember me
                      </label>
                    </div>
                  </div> */}
                  <div className="d-flex justify-content-center mt-5 login_container">
                    <Link
                      type="button"
                      name="button"
                      className="btn login_btn"
                      to="/suppliers"
                    >
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
