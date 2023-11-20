import { AiFillDelete } from "react-icons/ai";
import SubHeading from "../../../components/SubHeading/SubHeading";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {

    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data?.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item.name} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <SubHeading heading="MANAGE ALL ITEMs" subHeading="Hurry Up!"></SubHeading>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-[#D1A054] text-white font-medium md:text-lg">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu?.map((item, index) => <tr key={item?._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td>${item?.price}</td>
                                <td>
                                    <Link to={`/dashboard/manageItems/${item._id}`}><button className="hover:text-white hover:bg-[#D1A054] p-1.5 rounded border text-[#D1A054] border-[#B91C1C"><FaEdit size={20} /></button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item)}><AiFillDelete size={30} className="hover:text-white hover:bg-[#B91C1C] p-1.5 rounded border text-[#B91C1C] border-[#B91C1C]"></AiFillDelete></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;