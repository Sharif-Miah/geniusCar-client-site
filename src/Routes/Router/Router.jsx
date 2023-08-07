import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Service from "../../Pages/Service/Service";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails/ServiceDetails";
import CheckOut from "../../Pages/Home/Services/CheckOut/CheckOut";
import Booking from "../../Pages/Home/Booking/Booking";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/service',
                element: <Service/>
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/servicedetails/${params.id}`)
            },
            {
                path: '/chackout/:id',
                element: <CheckOut/>,
                loader: ({params}) => fetch(`http://localhost:5000/chackout/${params.id}`)
            },
            {
                path: '/booking',
                element: <Booking/>,
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router;