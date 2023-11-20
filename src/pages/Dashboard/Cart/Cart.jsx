import { AiFillDelete } from "react-icons/ai";
import SubHeading from "../../../components/SubHeading/SubHeading";
import useCarts from "../../../hooks/useCarts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, refetch] = useCarts();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDeleteCart = (id) => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
    }

    return (
        <div>
            <SubHeading heading="WANNA ADD MORE?" subHeading="My Cart"></SubHeading>
            <div className="bg-white shadow-2xl max-w-screen-lg my-10 mx-auto lg:p-4 rounded-xl">
                <div className="flex justify-evenly items-center">
                    <h1 className="font-bold font-cinzel text-3xl">Total Orders : {cart?.length}</h1>
                    <p className="font-bold font-cinzel text-3xl">Total Price : ${totalPrice}</p>
                    {cart.length ? <Link to="/dashboard/payment"><button className="font-cinzel p-3 text-white font-medium rounded-lg bg-[#D1A054]">PAY</button></Link> : <button disabled className="btn font-cinzel p-3 border  font-medium rounded-lg">PAY</button> }
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <p>#</p>
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item?._id}>
                                    <th>
                                        <p>{index + 1}</p>
                                    </th>
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
                                        <p className="font-medium">{item?.name}</p>
                                    </td>
                                    <td>${item?.price}</td>
                                    <th>
                                        <button onClick={() => handleDeleteCart(item?._id)}><AiFillDelete size={30} className="hover:text-white hover:bg-[#B91C1C] p-1.5 rounded border text-[#B91C1C] border-[#B91C1C]"></AiFillDelete></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;