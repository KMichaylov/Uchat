import axios from "axios";

const API_BASE_URL = "http://localhost:"

export default axios.create({
    baseURL: API_BASE_URL
})