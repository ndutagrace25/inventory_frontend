import React, { Component } from "react";
import { connect } from "react-redux";
import { resetPassword } from "../../actions/authActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ResetPassword extends Component {
  state = {
    phone: "",
    password: "",
    errors: {},
    confirmPassword: "",
    confirmPasswordError: "",
    resetPasswordMessage: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetPassword = (e) => {
    e.preventDefault();

    const { phone, password, confirmPassword, errors } = this.state;

    if (confirmPassword !== password) {
      this.setState({
        confirmPasswordError: "Password do not match",
      });
      console.log(errors);
    } else {
      const loginDetails = {
        phone,
        password,
      };
      this.props.resetPassword(loginDetails);
    }
  };

  static getDerivedStateFromProps(props, state) {
    if (props.auth.isAuthenticated) {
      props.history.push("/suppliers");
    }
    if (props.resetPasswordMessage !== state.resetPasswordMessage) {
      if (
        props.resetPasswordMessage.message === "Password reset was successful"
      ) {
        props.history.push("/");
      }
    }
    if (props.errors !== state.errors) {
      return {
        errors: props.errors.errors,
      };
    }
  }

  render() {
    const {
      phone,
      password,
      errors,
      confirmPassword,
      confirmPasswordError,
    } = this.state;
    
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
                <form onSubmit={(e) => this.resetPassword(e)}>
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
                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
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
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      name="confirmPassword"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="d-flex justify-content-center flex-row">
                    {confirmPasswordError === "Password do not match" && (
                      <small className="text-danger">
                        {confirmPasswordError}
                      </small>
                    )}
                    {errors.message && (
                      <small className="text-danger">{errors.message}</small>
                    )}
                  </div>

                  <div className="d-flex justify-content-center mt-5 login_container">
                    <button
                      type="submit"
                      name="button"
                      className="btn login_btn"
                      // to="/suppliers"
                    >
                      Reset Password
                    </button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <small className="mt-3 text-dark">
                      <Link
                        style={{ textDecoration: "none" }}
                        className="text-dark"
                        to="/"
                      >
                        Login Instead
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

ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  resetPasswordMessage: state.auth.passwordReset,
  errors: state.errors,
});

export default connect(mapStateToProps, { resetPassword })(ResetPassword);
