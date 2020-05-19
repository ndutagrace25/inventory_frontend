import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    phone: "",
    password: "",
    errors: {},
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();

    const { phone, password } = this.state;
    const loginDetails = {
      phone,
      password,
    };
    this.props.loginUser(loginDetails);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.auth.isAuthenticated) {
      props.history.push("/suppliers");
    }
    if (props.errors !== state.errors) {
      return {
        errors: props.errors.errors,
      };
    }
  }



  render() {
    const { phone, password, errors } = this.state;
    // console.log(this.props.auth);
    console.log(errors);
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
                <form onSubmit={(e) => this.login(e)}>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="far fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="number"
                      value={phone}
                      name="phone"
                      onChange={this.onChange}
                      className="form-control input_user"
                      placeholder="Phone Number"
                    />
                  </div>
                  {errors.phone && (
                    <small className="text-danger">{errors.phone}</small>
                  )}

                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control input_pass"
                      placeholder="password"
                      value={password}
                      name="password"
                      onChange={this.onChange}
                    />
                  </div>
                  {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                  {errors.message && (
                    <small className="text-danger">{errors.message}</small>
                  )}
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
                    <button
                      type="submit"
                      name="button"
                      className="btn login_btn"
                      // to="/suppliers"
                    >
                      Login
                    </button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <small className="mt-3 text-dark">
                      <Link
                        style={{ textDecoration: "none" }}
                        className="text-dark"
                        to="/resetPassword"
                      >
                        Reset Password
                      </Link>
                    </small>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
