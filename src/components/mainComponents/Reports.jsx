import React, { Component } from "react";
import NavBar from "../common/NavBar";
import InventoryReport from "./InventoryReport";
import TransactionReport from "./TransactionReport";

class Reports extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <InventoryReport />
          <TransactionReport />
          <div className="d-flex justify-content-center row mt-4">
            <div className="mr-5">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#inventory"
              >
                Inventory Report
              </button>
            </div>
            <div className="">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#transactions"
              >
                Transaction Report
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Reports;
