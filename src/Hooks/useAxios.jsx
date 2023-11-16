import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const isAxios = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxios = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  isAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }),
    (error) => {
      return Promise.reject(error);
    };

  // Add a response interceptor
  isAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error?.response?.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return isAxios;
};

export default useAxios;
