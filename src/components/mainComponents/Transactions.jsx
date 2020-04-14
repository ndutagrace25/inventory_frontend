import React, { Component } from "react";
import NavBar from "../common/NavBar";
import Table from "../common/Table";

class Transactions extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <div className="d-flex justify-content-center text-uppercase mt-5">
            <h6>Suppliers Details</h6>
          </div>

          <Table
            tableHead={
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Measurement</th>
                <th scope="col">Price</th>
                <th scope="col">Supplier</th>
                <th scope="col">Delete</th>
              </tr>
            }
            tableBody={
              <React.Fragment>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Mark</td>
                  <td>Mark</td>
                  <td>
                    <a className="btn btn-sm btn-danger">
                      <i class="fas fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>
                    <a className="btn btn-sm btn-danger">
                      <i class="fas fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <a className="btn btn-sm btn-danger">
                      <i class="fas fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              </React.Fragment>
            }
          />
          <button class="btn btn-sm btn-danger mb-2 mt-2">
            Delete All Transactions
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Transactions;
