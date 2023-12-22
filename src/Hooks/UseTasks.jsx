import { useQuery } from "@tanstack/react-query";
import SecureAxios from "./SecureAxios";
import UseAuth from "./UseAuth";

const UseTasks = () => {

  const { user } = UseAuth();

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await SecureAxios.get(`/tasks/${user.email}`);
      return res.data;
    },
  });

  return [tasks, refetch];
};

export default UseTasks;
