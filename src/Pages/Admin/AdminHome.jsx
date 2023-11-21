import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { FaUsers } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import axios from "axios";

const AdminHome = () => {
  const { user } = useAuth();

  const { data: stats = [] } = useQuery({
    queryKey: ["adminStates"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/adminStates");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold">
        <span>Hi Welcome </span>
        {user?.email ? user?.displayName : "Back"}
      </h1>
      <div>
        <div className="stats rounded-md shadow">
          <div className="stat">
            <div className="stat-figure text-primary text-4xl">
              <CiWallet />
            </div>
            <div className="stat-value text-primary">{stats?.revenue}</div>
            <div className="stat-title">Revenue</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <FaUsers />
            </div>
            <div className="stat-value text-4">{stats.users}</div>
            <div className="stat-title">Users</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <MdOutlineRestaurantMenu />
            </div>
            <div className="stat-value text-4">{stats.menuItems}</div>
            <div className="stat-title">Menu Items</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <CiDeliveryTruck />
            </div>
            <div className="stat-value text-secondary">{stats.orders}</div>
            <div className="stat-title">Orders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
