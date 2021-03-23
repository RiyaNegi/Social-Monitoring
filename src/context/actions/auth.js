import axios from "axios";
import axiosInstance from "../../helpers/AxiosInstance";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../../helpers/constants";
export const login = ({ email, password }) => (dispatch) => {
  console.log("reached", axiosInstance)
  dispatch({
    type: LOGIN_LOADING,
  });

  axios.post("http://127.0.0.1:5000/auth/login", JSON.stringify({
    email: email,
    password: password
  }), {
    "Content-Type": "application/json",
    Accept: "application/json"
  })
    .then((res) => {
      localStorage.token = res.data.token;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    })
}