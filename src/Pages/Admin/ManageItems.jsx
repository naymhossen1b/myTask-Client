import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";
import UseMenu from "../../Hooks/UseMenu";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";

const ManageItems = () => {
  const [menus, refetch] = UseMenu();
  const lockAxios = useAxios();

  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await lockAxios.delete(`/api/menus/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          toast.success(`${item.name} has been deleted`);
        }
      }
    });
  };

  return (
    <>
      <SectionTitle subHeading="Manage All Items" heading="Hurry up!" />
      <div>
        <div className="overflow-x-auto bg-orange-50 rounded-md">
          <table className="table">
            <thead className="bg-orange-400 text-white font-bold text-xl rounded-md">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>
                  Items Name (<span>{menus.length})</span>
                </th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu, index) => (
                <tr key={menu._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={menu.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{menu.name}</td>
                  <td>${menu.price}</td>
                  <td className="text-2xl font-bold text-green-500 hover:cursor-pointer">
                    <FaEdit />
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(menu)}
                      className=" text-2xl text-red-600 font-bold"
                    >
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ManageItems;
