import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};

  setActiveLink = (n)  => {
      
  }
  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color bg-primary">
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png"
            // className="brand_logo"
            alt="Logo"
            width="30"
            height="30"
          />
        </a>
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
            <li className="nav-item">
              <Link className="nav-link" to="/reports">
                Generate Reports
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-333"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Grace Nduta
                <i className="fas fa-user ml-1"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333"
              >
                <Link className="dropdown-item" to="/">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
