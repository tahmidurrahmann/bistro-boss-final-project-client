import { BsFillCartCheckFill } from "react-icons/bs";
import { FaBook, FaCalendar, FaFileContract, FaHome, FaList, FaMoneyBillAlt, FaRecordVinyl, FaShopify, FaUserMinus, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="grid grid-cols-1 md:grid-cols-7">
            <div className="col-span-1 md:col-span-2 lg:col-span-1 min-h-screen bg-[#D1A054]">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink
                                to="/dashboard/adminHome"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-medium text-lg" : "text-lg"
                                }
                            >
                                <FaHome></FaHome>Admin Home
                            </NavLink></li>
                            <li><NavLink
                                to="/dashboard/addItems"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-medium text-lg" : "text-lg"
                                }
                            >
                                <FaUtensils></FaUtensils>Add Items
                            </NavLink></li>
                            <li><NavLink
                                to="/dashboard/manageItems"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-medium text-lg" : "text-lg"
                                }
                            >
                                <FaList></FaList>Manage Items
                            </NavLink></li>
                            <li><NavLink
                                to="/dashboard/manageBookings"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-medium text-lg" : "text-lg"
                                }
                            >
                                <FaBook></FaBook>Manage Bookings
                            </NavLink></li>
                            <li><NavLink
                                to="/dashboard/allUsers"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-medium text-lg" : "text-lg"
                                }
                            >
                                <FaUsers></FaUsers>All Users
                            </NavLink></li>
                        </> :
                            <>
                                <li><NavLink
                                    to="/dashboard/userHome"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-medium text-lg" : "text-lg"
                                    }
                                >
                                    <FaHome></FaHome>User Home
                                </NavLink></li>
                                <li><NavLink
                                    to="/dashboard/reservation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-medium text-lg" : "text-lg"
                                    }
                                >
                                    <FaCalendar></FaCalendar>Reservation
                                </NavLink></li>
                                <li><NavLink
                                    to="/dashboard/paymentHistory"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-medium text-lg" : "text-lg"
                                    }
                                >
                                    <FaMoneyBillAlt></FaMoneyBillAlt>Payment History
                                </NavLink></li>
                                <li><NavLink
                                    to="/dashboard/cart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-medium text-lg" : "text-lg"
                                    }
                                >
                                    <BsFillCartCheckFill></BsFillCartCheckFill>My Cart
                                </NavLink></li>
                                <li><NavLink
                                    to="/dashboard/addReview"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-medium text-lg" : "text-lg"
                                    }
                                >
                                    <FaRecordVinyl></FaRecordVinyl>Add Review
                                </NavLink></li>
                                <li><NavLink
                                    to="/dashboard/myBooking"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "mb-4 text-white font-medium text-lg" : "text-lg mb-4"
                                    }
                                >
                                    <FaBook></FaBook>My Booking
                                </NavLink></li>
                            </>
                    }
                    <hr />
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-white font-medium text-lg" : "text-lg"
                        }
                    >
                        <div className="flex items-center justify-center gap-2"><FaHome></FaHome>Home</div>
                    </NavLink></li>
                    <li><NavLink
                        to="/menu"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-white font-medium text-lg" : "text-lg"
                        }
                    >
                        <div className="flex items-center justify-center gap-2"><FaUserMinus></FaUserMinus>Menu</div>
                    </NavLink></li>
                    <li><NavLink
                        to="/shop/salads"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-white font-medium text-lg" : "text-lg"
                        }
                    >
                        <div className="flex items-center justify-center gap-2"><FaShopify></FaShopify>Shop</div>
                    </NavLink></li>
                    <li><NavLink
                        to="/contactUs"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-white font-medium text-lg" : "text-lg"
                        }
                    >
                        <div className="flex items-center justify-center gap-2"><FaFileContract></FaFileContract>Contact</div>
                    </NavLink></li>
                </ul>
            </div>
            <div className="md:col-span-5 lg:col-span-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;