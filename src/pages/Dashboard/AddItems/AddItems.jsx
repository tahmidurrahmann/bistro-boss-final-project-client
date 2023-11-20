import { useForm } from "react-hook-form";
import SubHeading from "../../../components/SubHeading/SubHeading";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgbb_key = import.meta.env.VITE_IMGBB_API_KEY;
const imgbb_upload_url=`https://api.imgbb.com/1/upload?key=${imgbb_key}`;

const AddItems = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imageFile = {image : data.image[0]};
        const res = await axiosPublic.post(imgbb_upload_url, imageFile, {
            headers : {
                "Content-Type" : "multipart/form-data"
            },
        })
        const image = res.data?.data?.display_url;
        const uploadMenuItem = {
            name : data.name,
            category : data.category,
            price : parseFloat(data.price),
            recipe : data.recipe,
            image : image,
        }
        const menuRes = await axiosSecure.post('/menu',uploadMenuItem)
        if(menuRes?.data?.insertedId){
            reset();
            Swal.fire({
                title: "Good job!",
                text: `${data.name} is added into Menu.`,
                icon: "success"
              });
        }
    }

    return (
        <div>
            <SubHeading heading="ADD AN ITEm" subHeading="What's new?"></SubHeading>
            <div className="p-4">
                <div className="bg-[#F3F3F3] p-6 md:p-10  max-w-screen-lg mx-auto">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Recipe name*</span>
                            </label>
                            <input type="text" placeholder="Recipe name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name?.type === "required" && (
                                <p className="text-red-500">Name is required</p>
                            )}
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                            <div className="form-control flex-1 w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Category*</span>
                                </label>
                                <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full">
                                    <option disabled value="default">Category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soups</option>
                                    <option value="dessert">Desserts</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                                {errors.category?.type === "required" && (
                                    <p className="text-red-500">Category is required</p>
                                )}
                            </div>
                            <div className="form-control flex-1 w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Price*</span>
                                </label>
                                <input type="number" placeholder="Price" className="input input-bordered" {...register("price")} />
                                {errors.price?.type === "required" && (
                                    <p className="text-red-500">Price is required</p>
                                )}
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Recipe Details*</span>
                            </label>
                            <textarea name="details" {...register("recipe", { required: true })} placeholder="Recipe Details" className="border rounded p-4" id="details" cols="30" rows="10"></textarea>
                            {errors.recipe?.type === "required" && (
                                <p className="text-red-500">Recipe Details is required</p>
                            )}
                        </div>
                        <input type="file" name="image" id="image" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        {errors.image?.type === "required" && (
                            <p className="text-red-500">Image field is required</p>
                        )}
                        <br />
                        <button className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-[#835D23] to-[#B58130] flex gap-3 items-center">Add Item <FaUtensils></FaUtensils></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItems;