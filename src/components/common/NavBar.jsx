import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../img/logo.jpg";
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class NavBar extends Component {
  state = {};

  setActiveLink = (n) => {};

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  logoutUser = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };
  render() {
    const { user } = this.props.auth;
    console.log(user);

    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color bg-primary">
        <Link className="navbar-brand" to="/suppliers">
          <img
            src={Logo}
            // className="brand_logo"
            alt="Logo"
            width="30"
            height="30"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent-333"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/suppliers">
                Supplier
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inventory">
                Inventory
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                Checkout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/transactions">
                Transactions
              </Link>
            </li>
            {user.userType === 1 && (
              <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/reports">
                    Generate Reports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reports">
                    Add Users
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-333"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {user.firstName + " " + user.lastName + " "}
                <i className="fas fa-user ml-1"></i>
              </div>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333"
              >
                <button className="dropdown-item" onClick={this.logoutUser}>
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(NavBar));
