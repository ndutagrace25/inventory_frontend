import React, { Component } from "react";
import NavBar from "../common/NavBar";
import Table from "../common/Table";
import AddSupplier from "./AddSupplier";
import { connect } from "react-redux";
import { fetchSuppliers, createSupplier } from "../../actions/supplierActions";
import Swal from "sweetalert2";

class Supplier extends Component {
  state = {
    suppliers: [],
    name: "",
    contact: "",
    location: "",
    successMessage: {},
  };

  componentDidMount() {
    this.props.fetchSuppliers();
  }

  // componentWillReceiveProps(nextProps){

  // }
  static getDerivedStateFromProps(props, state) {
    if (props.suppliers !== state.suppliers) {
      return {
        suppliers: props.suppliers,
      };
    }
    if (props.successMessage.message === "Supplier created sussefully") {
      console.log(props.successMessage);
      props.successMessage.message = "";
      JSON.stringify(Swal.fire("SMS Sent Successful", "", "success"));
      return {
        name: "",
        contact: "",
        location: "",
      };
    }
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createSupplier = () => {
    const { name, contact, location } = this.state;

    const supplierDetails = {
      name,
      contact,
      location,
    };

    // console.log(supplierDetails);
    this.props.createSupplier(supplierDetails);
  };

  render() {
    const { suppliers, name, contact, location } = this.state;
    const count = 1;

    const allSuppliers =
      suppliers instanceof Array
        ? suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{count}</td>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.location}</td>
              <td>
                <button className="btn btn-sm btn-danger">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-sm btn-primary">
                  <i className="fas fa-pencil-alt"></i>
                </button>
              </td>
            </tr>
          ))
        : null;
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <div className="d-flex justify-content-center text-uppercase mt-5">
            <h6>Suppliers Details</h6>
          </div>
          <button
            className="btn btn-sm btn-info mb-2 mt-2"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add Supplier
          </button>
          <AddSupplier
            name={name}
            contact={contact}
            location={location}
            createSupplier={this.createSupplier}
            onChange={this.onChange}
          />
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
            tableBody={<React.Fragment>{allSuppliers}</React.Fragment>}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  suppliers: state.suppliers.suppliers,
  successMessage: state.suppliers.createSupplier,
});

export default connect(mapStateToProps, { fetchSuppliers, createSupplier })(
  Supplier
);
