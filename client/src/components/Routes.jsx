import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Scheduling from "../pages/Scheduling";
import Services from "../pages/Services";
import AdminDash from "./AdminDash";
import App from "../App";
import Login from "./Login";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about-votive-laundry",
        element: <About />,
    },
    {
        path: "/votive-laundry-services-pricing",
        element: <Services />,
    },
    {
        path: "/contact-votive-laundry",
        element: <Contacts />,
    },
    {
        path: "/votive-laundry-schedule-pick-up",
        element: <Scheduling />,
    },
    {
        path: "admin-login",
        element: <Login />,
    },
    {
        path: "admindashboard",
        element: <AdminDash />
    },
    // {
    //     path: "auth/callback",
    //     element: <OAuthCallback />
    // }
]

export default routes;