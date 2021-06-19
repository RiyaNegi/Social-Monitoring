import axios from "axios";

const token = "JWT " + localStorage.getItem("token");

export const AuthAxios = axios.create({
    baseURL: "http://127.0.0.1:5000",
    //baseURL: "https://6be432d6-577c-4430-9cf4-baf9ef1fcaeb.mock.pstmn.io",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Authorization": token ? token : null
    },
});