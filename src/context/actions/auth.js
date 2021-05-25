import axios from "axios";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from "../../helpers/constants";
import History from "../../utils/history";
import AxiosInstance from "../../helpers/AxiosInstance"



export const login = ({ email, password }) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };
  console.log(email, password)

  AxiosInstance.post("/auth", JSON.stringify({
    username: email,
    password: password
  }))
    .then((res) => {
      localStorage.setItem('token', res.data.access_token)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      History.push('/dashboard')
    })
    .catch((err) => {
      console.log("error", err)
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    })
}

export const logout = () => {
  // console.log(email, password)
  window.localStorage.clear();
  History.push('/login')
  console.log("there??", localStorage.token)
}


export const signup = ({ email, brand, keywords, password }) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  AxiosInstance.post("/signup", JSON.stringify({
    username: email,
    brand: brand,
    keywords: keywords,
    password: password,
  }))
    .then((res) => {
      console.log("succcesss bitccchh!!!", res)
    })
    .catch((err) => {
      console.log("error!!!", err)
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    })
}

