import { createBrowserRouter } from "react-router-dom";
import Article from "../page/Article";
import Login from "../page/Login";
// import App from "../App";
import Home from "../page/Home";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/article",
        element: <Article/>
    },
    {
        path: "/",
        element: <Home/>
    }
])

export default router