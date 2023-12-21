import { useQuery } from "@tanstack/react-query";
import SecureAxios from "./SecureAxios";

const UseTasks = () => {
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await SecureAxios.get("/tasks");
      return res.data;
    },
  });

  return [tasks, refetch];
};

export default UseTasks;
