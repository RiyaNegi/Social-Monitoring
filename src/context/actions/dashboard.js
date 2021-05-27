import { AxiosInstance } from "../../helpers/AxiosInstance"
import {
    LOADING,
    LOGIN_ERROR,
    OUTREACH_SUCCESS,
    ERROR,
    SENTIMENT_SUCCESS,
    BUZZ_SUCCESS,
    WORDLCLOUD_SUCCESS,
    MENTIONS_SUCCESS
} from "../../helpers/constants";

export const outreach = (dispatch) => {
    // dispatch({
    //     type: LOADING,
    // });
    console.log("outreach function reached")
    AxiosInstance.get("/outreach")
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

export const sentiment = (dispatch) => {
    // dispatch({
    //     type: LOADING,
    // });

    AxiosInstance.get("/sentiment")
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

export const buzz = (dispatch) => {
    // dispatch({
    //     type: LOADING,
    // });

    AxiosInstance.get("/buzz")
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

export const wordCloud = (dispatch) => {
    // dispatch({
    //     type: LOADING,
    // });
    AxiosInstance.get("/wordCloud")
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

export const totalMentions = (dispatch) => {
    // dispatch({
    //     type: LOADING,
    // });

    AxiosInstance.get("/totalMentions")
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