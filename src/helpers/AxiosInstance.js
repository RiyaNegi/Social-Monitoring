import axios from "axios";

const token = "JWT " + localStorage.getItem("token");
const user = localStorage.getItem("user");
console.log("user token ->", user)

const AxiosInstance = axios.create({
    baseURL: "https://9d1b1a84-5fe5-473f-80ce-b25b49ed92bd.mock.pstmn.io",
    // baseURL: "http://127.0.0.1:5000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Authorization": token,
        "userID": user
    },
});

export default AxiosInstance


