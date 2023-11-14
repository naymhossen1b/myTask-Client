import { useEffect, useState } from "react";

const UseMenu = () => {

  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("http://localhost:3000/api/menus")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
        setLoading(false);
      });
  }, []);

  return [menus, loading];
};

export default UseMenu;
