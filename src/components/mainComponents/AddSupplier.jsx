import React from "react";

const AddSupplier = ({ name, contact, location, createSupplier, onChange }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Supplier
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
                <label htmlFor="exampleInputEmail1">Supplier Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="contact"
                  value={contact}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="location"
                  value={location}
                  onChange={onChange}
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
            <button type="button" className="btn btn-primary" onClick={createSupplier}>
              Save Supplier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSupplier;
