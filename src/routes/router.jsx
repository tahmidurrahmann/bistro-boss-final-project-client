import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
const router = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        errorElement : <Error></Error>,
        children : [
            {
                path :"/",
                element : <Home></Home>
            }
        ]
    }
])

export default router;