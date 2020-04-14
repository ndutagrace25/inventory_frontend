import React, { Component } from "react";
import NavBar from "../common/NavBar";
import Table from "../common/Table";
import AddToCart from "./AddToCart";

class Checkout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <div className="text-uppercase d-flex justify-content-center  mt-4">
            <h6>Checkout</h6>
          </div>
          <AddToCart />
          <div className="d-flex row justify-content-between mt-2">
            <div className="col-md-6">
              <div className="d-flex justify-content-center">
                <h6>Cart</h6>
              </div>
              <Table
                tableHead={
                  <tr>
                    <th>#</th>
                    <th>Customer Name</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>MeasureMent</th>
                    <th>Price</th>
                    <th>Supplier</th>
                    <th>Delete</th>
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
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>
                        <a className="btn btn-sm btn-danger">
                          <i class="fas fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  </React.Fragment>
                }
              />
              <div className="mt-4 d-flex align-items-center">
                <div className="ml-0">
                  <div className="ml-0">
                    <h6>Total Sale: $6000</h6>
                  </div>
                  <div className="form-group pl-0 d-flex col-md-9">
                    <label htmlFor="">
                      <h6>Tendered: </h6>
                    </label>
                    <input
                      className="input-sm ml-2 form-control"
                      type="number"
                    />
                  </div>
                  <div className="">
                    <h6>Change: $60</h6>
                  </div>
                </div>
                <div className="">
                  <button className="btn btn-primary">Checkout</button>
                </div>
              </div>
            </div>
            {/* Products section */}
            <div className="col-md-6">
              <div className="d-flex justify-content-center">
                <h6>Product</h6>
              </div>
              <Table
                tableHead={
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>MeasureMent</th>
                    <th>Price</th>
                    <th>Supplier</th>
                    <th>Add to cart</th>
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
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i class="fas fa-plus-circle"></i>
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
                      <td>
                        <a className="btn btn-sm btn-primary">
                          <i class="fas fa-plus-circle"></i>
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
                      <td>
                        <a className="btn btn-sm btn-primary">
                          <i class="fas fa-plus-circle"></i>
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
                      <td>
                        <a className="btn btn-sm btn-primary">
                          <i class="fas fa-plus-circle"></i>
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
                      <td>
                        <a className="btn btn-sm btn-primary">
                          <i class="fas fa-plus-circle"></i>
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
                      <td>
                        <a className="btn btn-sm btn-primary">
                          <i class="fas fa-plus-circle"></i>
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
                      <td>
                        <a className="btn btn-sm btn-primary">
                          <i class="fas fa-plus-circle"></i>
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
                      <td>
                        <a className="btn btn-sm btn-primary">
                          <i class="fas fa-plus-circle"></i>
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
                      <td>
                        <a className="btn btn-sm btn-primary">
                          <i class="fas fa-plus-circle"></i>
                        </a>
                      </td>
                    </tr>
                  </React.Fragment>
                }
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout;
