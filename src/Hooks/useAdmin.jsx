import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const isAxios = useAxios();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ["isAdmin"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await isAxios?.get(`/users/admin/${user?.email}`);
      // console.log(res?.data);
      return res?.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading]
};

export default useAdmin;
