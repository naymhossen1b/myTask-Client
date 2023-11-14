import axios from "axios";

const isAxios = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxios = () => {
  return isAxios;
};

export default useAxios;
