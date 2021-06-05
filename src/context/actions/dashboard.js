import { AuthAxios } from "../../helpers/AuthAxios.js";
import AxiosInstance from "../../helpers/AxiosInstance.js"
import {
	OUTREACH_SUCCESS,
	ERROR,
	SENTIMENT_SUCCESS,
	BUZZ_SUCCESS,
	WORDLCLOUD_SUCCESS,
	MENTIONS_SUCCESS,
	GET_IDENTITY
} from "../../helpers/constants";


export const outreach = (user) => (dispatch) => {
	// dispatch({
	//     type: LOADING,
	// });
	console.log("outreach function reached")
	AxiosInstance.get("/outreach", {
		params: {
			user
		}
	})
		.then((res) => {
			console.log("succcesss bitccchh!!!", res)
			setTimeout(function () {
				dispatch({
					type: OUTREACH_SUCCESS,
					payload: res,
				});
			}, 11000);

		})
		.catch((err) => {
			console.log("error!!!", err)
			dispatch({
				type: ERROR,
				payload: err.response ? err.response.data : "COULD NOT CONNECT",
			});
		})
}

export const sentiment = (user) => (dispatch) => {
	// dispatch({
	//     type: LOADING,
	// });

	AxiosInstance.get("/sentiment", {
		params: {
			user
		}
	})
		.then((res) => {
			console.log("succcesss bitccchh!!!", res)
			setTimeout(function () {
				dispatch({
					type: SENTIMENT_SUCCESS,
					payload: res,
				})
			}, 15000);

		})
		.catch((err) => {
			console.log("error!!!", err)
			dispatch({
				type: ERROR,
				payload: err.response ? err.response.data : "COULD NOT CONNECT",
			});
		})
}

export const buzz = (user) => (dispatch) => {
	// dispatch({
	//     type: LOADING,
	// });

	AxiosInstance.get("/buzz", {
		params: {
			user
		}
	})
		.then((res) => {
			console.log("succcesss bitccchh!!!", res)
			setTimeout(function () {
				dispatch({
					type: BUZZ_SUCCESS,
					payload: res,
				});
			}, 5000)

		})
		.catch((err) => {
			console.log("error!!!", err)
			dispatch({
				type: ERROR,
				payload: err.response ? err.response.data : "COULD NOT CONNECT",
			});
		})
}

export const wordCloud = (user) => (dispatch) => {
	// dispatch({
	//     type: LOADING,
	// });
	AxiosInstance.get("/wordCloud", {
		params: {
			user
		}
	})
		.then((res) => {
			console.log("succcesss bitccchh!!!", res)
			setTimeout(function () {
				dispatch({
					type: WORDLCLOUD_SUCCESS,
					payload: res,
				});
			}, 12000)

		})
		.catch((err) => {
			console.log("error!!!", err)
			dispatch({
				type: ERROR,
				payload: err.response ? err.response.data : "COULD NOT CONNECT",
			});
		})
}

export const totalMentions = (user) => (dispatch) => {
	// dispatch({
	//     type: LOADING,
	// });
	AxiosInstance.get("/totalMentions", {
		params: {
			user
		}
	})
		.then((res) => {
			console.log("succcesss bitccchh!!!", res)
			setTimeout(function () {
				dispatch({
					type: MENTIONS_SUCCESS,
					payload: res,
				});
			}, 14000)
		})
		.catch((err) => {
			console.log("error!!!", err)
			dispatch({
				type: ERROR,
				payload: err.response ? err.response.data : "COULD NOT CONNECT",
			});
		})
}

export const identity = (dispatch) => {
	AxiosInstance.get("/protected")
		.then((res) => {
			console.log("Identity found bitccchh!!!", res)
			localStorage.setItem('user', res.data)
			dispatch({
				type: GET_IDENTITY,
				payload: res,
			});

		})
		.catch((err) => {
			console.log("error!!!", err)
			dispatch({
				type: ERROR,
				payload: err.response ? err.response.data : "COULD NOT CONNECT",
			});
		})
}