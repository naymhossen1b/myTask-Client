import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
