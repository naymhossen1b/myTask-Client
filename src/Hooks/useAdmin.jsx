import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
  const { user } = useAuth();
  const isAxios = useAxios();

  const { data: isAdmin } = useQuery({
    queryKey: ["isAdmin"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await isAxios?.get(`/users/admin/${user?.email}`);
      console.log(res?.data);
      return res?.data?.admin;
    },
  });
  return [isAdmin]
};

export default useAdmin;
