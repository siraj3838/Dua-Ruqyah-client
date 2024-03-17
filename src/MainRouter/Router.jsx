import { createBrowserRouter } from "react-router-dom";
import Root from "../MainRoot/Root";
import Home from "../Pages/HomePage/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default Router;