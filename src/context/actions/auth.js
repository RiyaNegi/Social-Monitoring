import axios from "axios";
import axiosInstance from "../../helpers/AxiosInstance";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../../helpers/constants";
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

  axios.post("http://127.0.0.1:5000/auth", JSON.stringify({
    username: email,
    password: password
  }), options)
    .then((res) => {
      console.log("succcesss bitccchh!!!", res)
      localStorage.token = res.data.token;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error bitccchh!!!", err)
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    })
}

