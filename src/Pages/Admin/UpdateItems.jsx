import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxios from "../../Hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const UpdateItems = () => {
  const {name, recipe, price, category, _id} = useLoaderData();

  const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

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
        const addMenus = await isAxios.patch(`/api/menus/${_id}`, dataInfo);
        if (addMenus.data.modifiedCount > 0) {
          toast.success(`${data.name} Successfully Updated Your Menu`);
          reset();
        }
        // toast.error(`${data.name} Not Updated!`);
      }
    };

    return (
      <>
        <div>
          <SectionTitle subHeading="Update Items Info" heading="Update Items" />
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
                defaultValue={name}
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
                  defaultValue={category}
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
                  defaultValue={price}
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
                defaultValue={recipe}
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
              Update Items
              <FaUtensils className="ml-4 text-white" />
            </button>
          </form>
        </div>
        <Toaster />
      </>
    );
  };

export default UpdateItems;
