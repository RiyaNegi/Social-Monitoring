import axios from "axios";

const token = localStorage.getItem("token");
console.log("TOKEN", token);
const AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
});
AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default AxiosInstance;