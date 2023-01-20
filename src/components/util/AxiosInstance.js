import axios from "axios";

let url =  "https://api.escuelajs.co/api/v1"

axios.defaults.headers.common["content-type"] = "application/json"
axios.defaults.headers.common["Accept"] = "application/json"

export const AxiosInstance = axios.create({
    baseURL : url,
    timeout : 1500
})
