import React, { Component } from "react"

class AddToCart extends Component {
  state = {};
  
  // componentDidMount() {
  //   if (!this.props.auth.isAuthenticated) {
  //     this.props.history.push("/");
  //   }
  // }
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add To Cart
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
              {/* form */}
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Customer Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Product</label>
                  <select name="" id="" className="form-control">
                    <option value="">Sugar</option>
                    <option value="">Rice</option>
                    <option value="">Milk</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Quantity Available</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Measurement</label>
                  <select name="" id="" className="form-control">
                    <option value="">Kgs</option>
                    <option value="">Piece</option>
                    <option value="">Liter</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Price(per item)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Supplier</label>
                  <select name="" id="" className="form-control">
                    <option value="">Grace</option>
                    <option value="">Nduta</option>
                    <option value="">Kigaa</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Quantity Required</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Final Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </form>
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
                Save To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddToCart;
