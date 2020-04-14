import React, { Component } from "react";
import NavBar from "../common/NavBar";
import Table from "../common/Table";
import AddSupplier from "./AddSupplier";

class Supplier extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <div className="d-flex justify-content-center text-uppercase mt-5">
            <h6>Suppliers Details</h6>
          </div>
          <button
            class="btn btn-sm btn-info mb-2 mt-2"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add Supplier
          </button>
          <AddSupplier />
          <Table
            tableHead={
              <tr>
                <th scope="col">#</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Location</th>
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

export default Supplier;
