import { createBrowserRouter } from "react-router-dom";
import ErrorLayout from "../layout/ErrorLayout";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Blog from "../pages/blog/Blog";
import Courses from "../pages/courses/Courses";
import Error from "../pages/error/Error";
import Events from "../pages/events/Events";
import Features from "../pages/features/Features";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {path: "/", element: <Home></Home>},
            {path: "/courses", element: <Courses></Courses>},
            {path: "/features", element: <Features></Features>},
            {path: "/events", element: <Events></Events>},
            {path: "/blog", element: <Blog></Blog>},
        ]
    },
    {
        path: "*",
        element: <ErrorLayout/>,
        children: [
            {path: "*", element: <Error></Error>}
        ]
    }
])

export default router;