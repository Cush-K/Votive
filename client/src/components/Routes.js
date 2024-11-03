import About from "../pages/About";
import Contacts from "../pages/Contacts";
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
    }
]

export default routes;