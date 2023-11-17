// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const UseMenu = () => {
  const publicAxios = useAxiosPublic();

  const {
    data: menus = [],
    isPending: loading,
    refetch
  } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await publicAxios("/api/menus");
      return res.data;
    },
  });

  return [menus, refetch, loading];
};

export default UseMenu;
