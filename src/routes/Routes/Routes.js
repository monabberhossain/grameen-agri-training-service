import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import ServiceDetail from "../../pages/ServiceDetail/ServiceDetail";
import Home from "../../pages/Home/Home/Home";
import Blog from "../../pages/Blog/Blog";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import ServiceItem from "../../pages/Home/Services/ServiceItem";
import Services from "../../pages/Home/Services/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: "/services/:id",
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
        ],
    },
]);

export default router;
