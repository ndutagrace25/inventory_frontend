import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import {
  Inventory,
  Supplier,
  Checkout,
  Transactions,
  Reports
} from "./components/mainComponents";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/suppliers" component={Supplier} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/reports" component={Reports} />

      </Switch>
    </Router>
  );
}

export default App;
