import {
    FETCH_SUPPLIERS,
    CREATE_SUPPLIER,
    GET_ERRORS
} from './types';
import axios from 'axios';

// Fetch all suppliers
export const fetchSuppliers = () => dispatch => {
    let url = `api/suppliers`;

    axios
        .get(url)
        .then(suppliers => {
            dispatch({
                type: FETCH_SUPPLIERS,
                payload: suppliers.data
            })
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            })
        })
}

// Create a supplier
export const createSupplier = (supplier) => dispatch => {
    let url = `api/suppliers/createSupplier`
    axios
        .post(url, supplier)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: CREATE_SUPPLIER,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            })
        })
}