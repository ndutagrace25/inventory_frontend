import React, { Component } from "react";
import NavBar from "../common/NavBar";
import Table from "../common/Table";
import AddInventory from "./AddInventory";

class Inventory extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <div className="d-flex justify-content-center text-uppercase mt-5">
            <h6>Inventory Details</h6>
          </div>
          <div className="d-flex row ml-auto">
            <div className="card col-md-2 mr-5 border border-success">
              <h6>Total inventory value</h6>
              <div className="">$2000</div>
            </div>
            <div className="card col-md-2 border border-success">
              <h6>Total products</h6>
              <div className="">3</div>
            </div>
          </div>
          <button
            class="btn btn-sm btn-info mb-2 mt-3"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add Inventory
          </button>
          <AddInventory />
          <Table
            tableHead={
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Measurement</th>
                <th scope="col">Original Price</th>
                <th scope="col">Profit</th>
                <th scope="col">Selling Price</th>
                <th scope="col">Supplier</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
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
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <a className="btn btn-sm btn-danger">
                      <i class="fas fa-trash-alt"></i>
                    </a>
                  </td>
                  <td>
                    <a className="btn btn-sm btn-primary">
                      <i class="fas fa-pencil-alt"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <a className="btn btn-sm btn-danger">
                      <i class="fas fa-trash-alt"></i>
                    </a>
                  </td>
                  <td>
                    <a className="btn btn-sm btn-primary">
                      <i class="fas fa-pencil-alt"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <a className="btn btn-sm btn-danger">
                      <i class="fas fa-trash-alt"></i>
                    </a>
                  </td>
                  <td>
                    <a className="btn btn-sm btn-primary">
                      <i class="fas fa-pencil-alt"></i>
                    </a>
                  </td>
                </tr>
              </React.Fragment>
            }
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Inventory;
