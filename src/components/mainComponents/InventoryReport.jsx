import React, { Component } from "react";
import Table from "../common/Table";

class InventoryReport extends Component {
  state = {};
  render() {
    return (
      <div
        className="modal fade"
        id="inventory"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Inventory Report(Generate fields required)
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* table */}
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
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                  </React.Fragment>
                }
              />
              {/* end of form */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Print Report
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryReport;
