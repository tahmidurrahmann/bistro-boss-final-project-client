import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop/Shop";
const router = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        errorElement : <Error></Error>,
        children : [
            {
                path :"/",
                element : <Home></Home>
            },
            {
                path :"/menu",
                element : <Menu></Menu>
            },
            {
                path :"/shop/:category",
                element : <Shop></Shop>,
            },
        ]
    }
])

export default router;