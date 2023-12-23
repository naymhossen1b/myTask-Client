import axios from "axios";

const SecureAxios = axios.create({
  baseURL: "https://my-task-server-indol.vercel.app",
  withCredentials: true,
});

export default SecureAxios;


// https://my-task-server-indol.vercel.app
// http://localhost:5000