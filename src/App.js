import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import ResetPassword from './components/auth/ResetPassword';
import {
  Inventory,
  Supplier,
  Checkout,
  Transactions,
  Reports,
} from "./components/mainComponents";

// Check for token
if (localStorage.jwtToken) {
  // set the auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and is authenticated
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  
    // Redirect to Login page
    window.location.href = "/";
  }
}

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/resetPassword" component={ResetPassword} />
            <Route exact path="/suppliers" component={Supplier} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/transactions" component={Transactions} />
            <Route exact path="/reports" component={Reports} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
