import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop/Shop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ContactUs from "../pages/ContactUs/ContactUs";
import PrivateRoute from "../private/PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import PrivateAdminRoute from "../private/PrivateAdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateManageItems from "../pages/Dashboard/ManageItems/UpdateManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/shop/:category",
                element: <Shop></Shop>,
            },
            {
                path: "/contactUs",
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            // admin panel
            {
                path: "allUsers",
                element: <PrivateAdminRoute><AllUsers></AllUsers></PrivateAdminRoute>,
            },
            {
                path: "manageItems",
                element: <PrivateAdminRoute><ManageItems></ManageItems></PrivateAdminRoute>,
            },
            {
                path: "manageItems/:id",
                element: <PrivateAdminRoute><UpdateManageItems></UpdateManageItems></PrivateAdminRoute>,
                loader : ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path : "addItems",
                element : <PrivateAdminRoute><AddItems></AddItems></PrivateAdminRoute>,
            }
        ]
    }
])

export default router;