import axios from "axios";

const SecureAxios = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default SecureAxios;
