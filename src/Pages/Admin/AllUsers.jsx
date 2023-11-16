import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const AllUsers = () => {
  const isAxios = useAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await isAxios.get("/users");
      return res.data;
    },
  });

  const handleDelete = (user) => {
    Swal.fire({
      title: `${user.name} are you sure?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        isAxios.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleUpdate = (user) => {
    isAxios.patch(`/users/admin/${user._id}`)
    .then((res) => {
      console.log(res);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} is an admin now`);
      }
    });
  };

  return (
    <div className="bg-orange-100 border ">
      <div className="flex items-center bg-orange-400 border border-orange-500 rounded-md p-2 text-white justify-evenly font-bold text-xl">
        <h2>All Users:</h2>
        <h2>Total Users: {users.length}</h2>
      </div>
      <div className="bg-white border border-orange-400 mt-3 rounded-md text-black">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="font-bold text-xl">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th> Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div>{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  {
                  user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <td className="text-2xl my-3 font-bold btn text-white bg-orange-400"
                      onClick={() => handleUpdate(user)}
                    >
                      <FaUsers />
                    </td>
                  )}
                  <th>
                    <button
                      onClick={() => handleDelete(user)}
                      className="text-2xl font-bold btn text-red-500 bg-orange-100"
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AllUsers;
