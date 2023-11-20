import { useQuery } from "@tanstack/react-query";
import SubHeading from "../../../components/SubHeading/SubHeading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AiFillDelete } from "react-icons/ai";
import { RiUserStarFill } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data;
        }
    })

    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this user admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        if(res.data.modifiedCount){
                            Swal.fire({
                                title: "success!",
                                text: "Your make this user Admin.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    const handleDeleteUser = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount) {
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
        <div className="max-w-screen-xl mx-auto">
            <SubHeading heading="MANAGE ALL USERS" subHeading="How many??"></SubHeading>
            <div>
                <h1 className="text-4xl font-cinzel font-bold">Total Users: {users?.length} </h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{ user?.role === "admin" ? "Admin" : <button onClick={() => handleMakeAdmin(user?._id)} className="hover:text-white hover:bg-[#D1A054] p-1.5 rounded border text-[#D1A054] border-[#B91C1C"><RiUserStarFill size={20} /></button>}</td>
                                <td> <button onClick={() => handleDeleteUser(user?._id)}><AiFillDelete size={30} className="hover:text-white hover:bg-[#B91C1C] p-1.5 rounded border text-[#B91C1C] border-[#B91C1C]"></AiFillDelete></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;