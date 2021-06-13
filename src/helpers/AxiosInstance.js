import axios from "axios";

const token = "JWT " + localStorage.getItem("token");
const user = localStorage.getItem("user");

const AxiosInstance = axios.create({
    // baseURL: "https://6be432d6-577c-4430-9cf4-baf9ef1fcaeb.mock.pstmn.io",
    // baseURL: "http://127.0.0.1:5000",
    baseURL: "http://d9599ed3c07b.ngrok.io",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Authorization": token,
        "userID": user
    },
});

export default AxiosInstance


