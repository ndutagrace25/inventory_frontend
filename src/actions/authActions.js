import {
  SET_CURRENT_USER,
  GET_ERRORS,
  RESET_PASSWORD
} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Login user
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      console.log(res.data);
      // Save to localStorage
      const {
        token
      } = res.data;

      // set token to localStorage
      localStorage.setItem("jwtToken", token);

      // set token to auth Header
      setAuthToken(token);

      // decode token to get user data
      const decoded = jwt_decode(token);

      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Logout user
export const logoutUser = () => dispatch => {
  // Remeove token from locall storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // set current user to {} which will set isAuthenticat ed to false
  dispatch(setCurrentUser({}));
}

// reset user password
export const resetPassword = (userDetails) => dispatch => {
  axios
    .post('/api/users/resetPassword', userDetails)
    .then(res => {
      dispatch({
        type: RESET_PASSWORD,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}