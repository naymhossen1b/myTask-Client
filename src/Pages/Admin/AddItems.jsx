import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxios from "../../Hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();

  const publicAxios = useAxiosPublic();
  const isAxios = useAxios();

  const onSubmit = async (data) => {
    const getImage = { image: data.image[0] };
    const res = await publicAxios.post(imageHostingApi, getImage, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const dataInfo = {
        name: data.name,
        price: parseFloat(data.price),
        category: data.category,
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const addMenus = await isAxios.post("/api/menus", dataInfo);
      if (addMenus.data.insertedId) {
        toast.success(`${data.name} Successfully Added`);
        reset();
      }
      toast.error(`${data.name} Not Added!`);
    }
  };

  return (
    <div>
      <div>
        <SectionTitle subHeading={"Add an items"} heading={"Whats New!"} />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="md:flex justify-between gap-5 items-center grid">
            {/* Category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="default" disabled selected>
                  Chose Your category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* Price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Your Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input-bordered file-input-md w-full max-w-xs mt-3"
            />
          </div>
          <button type="submit" className="btn bg-orange-300">
            Add Items
            <FaUtensils className="ml-4 text-white" />
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default AddItems;
