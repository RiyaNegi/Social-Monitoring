import axios from "axios";

const token = "JWT " + localStorage.getItem("token");
console.log("TOKEN", token);
export const AxiosInstance = axios.create({
    baseURL: "https://9d1b1a84-5fe5-473f-80ce-b25b49ed92bd.mock.pstmn.io",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Authorization": token ? token : null
    },
});

export const AuthAxios = axios.create({
    baseURL: "http://127.0.0.1:5000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

