import axios from "axios";

export const AuthAxios = axios.create({
    baseURL: "http://127.0.0.1:5000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});