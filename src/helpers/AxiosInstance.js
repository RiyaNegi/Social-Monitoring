import axios from "axios";

const token = "JWT " + localStorage.getItem("token");
const AxiosInstance = axios.create({
    baseURL: "https://9d1b1a84-5fe5-473f-80ce-b25b49ed92bd.mock.pstmn.io",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Authorization": token ? token : null
    },
});

// console.log("WHAT IS THIS ASIOS::::", AxiosInstance);

export default AxiosInstance


