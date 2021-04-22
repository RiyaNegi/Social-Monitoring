import axios from "axios";
import axiosInstance from "../../helpers/AxiosInstance";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from "../../helpers/constants";
import History from "../../utils/history";



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
      localStorage.setItem('token', res.data.access_token)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      console.log("there??", localStorage.token)
      History.push('/dashboard')
    })
    .catch((err) => {
      console.log("error bitccchh!!!", err)
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    })
}

export const logout = () => {
  console.log("did it reach here?")
  // dispatch({
  //   type: LOGIN_LOADING,
  // });
  const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  // console.log(email, password)
  window.localStorage.clear();
  History.push('/login')
  console.log("there??", localStorage.token)


  // window.localStorage.removeItem("token"); //remove one item

  // axios.post("http://127.0.0.1:5000/auth", JSON.stringify({
  //   username: email,
  //   password: password
  // }), options)
  //   .then((res) => {
  //     console.log("succcesss bitccchh!!!", res)
  //     localStorage.setItem('token', res.data.token)
  //     dispatch({
  //       type: LOGIN_SUCCESS,
  //       payload: res.data,
  //     });
  //     console.log("there??", localStorage.token)
  //     // History.push('/dashboard')
  //   })
  //   .catch((err) => {
  //     console.log("error bitccchh!!!", err)
  //     dispatch({
  //       type: LOGIN_ERROR,
  //       payload: err.response ? err.response.data : "COULD NOT CONNECT",
  //     });
  //   })
}


