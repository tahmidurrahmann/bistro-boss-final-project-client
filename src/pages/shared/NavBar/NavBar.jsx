import { NavLink } from "react-router-dom";
import shopLogo from '../../../assets/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'

const NavBar = () => {

    const navLinks = <div className="flex items-center gap-4">
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/menu"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
            }
        >
            Our Menu
        </NavLink>
        <NavLink
            to="/shop/salads"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
            }
        >
            <span className="flex items-center">Our Shop <img className="w-[40px]" src={shopLogo} alt="" /></span>
        </NavLink>
    </div>

    return (
        <>
            <div className="navbar fixed z-10 bg-[#15151580] bg-opacity-30 max-w-screen-2xl text-white px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#15151580] rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="font-cinzel font-bold text-xl"><span className="text-2xl">BISTRO BOSS</span> <p>R e s t a u r a n t</p></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;