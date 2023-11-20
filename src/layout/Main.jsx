import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('/login') || location.pathname.includes('/register');
    
    return (
        <div>
            { isLogin || <NavBar></NavBar>}
            <Outlet></Outlet>
            { isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;