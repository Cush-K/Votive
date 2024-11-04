import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Scheduling from "../pages/Scheduling";
import Services from "../pages/Services";
import App from "./App";

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
    }
]

export default routes;