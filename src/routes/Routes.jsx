import { createBrowserRouter } from 'react-router-dom';
import ErrorLayout from '../layout/ErrorLayout';
import Root from '../layout/Root';
import Blog from '../pages/blog/Blog';
import Courses from '../pages/courses/Courses';
import Error from '../pages/error/Error';
import Events from '../pages/events/Events';
import Features from '../pages/features/Features';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/courses', element: <Courses></Courses> },
      { path: '/features', element: <Features></Features> },
      { path: '/events', element: <Events></Events> },
      { path: '/blog', element: <Blog></Blog> },
      { path: '/login', element: <Login></Login> },
      { path: '/signup', element: <Signup></Signup> },
    ],
  },
  {
    path: '*',
    element: <ErrorLayout />,
    children: [{ path: '*', element: <Error></Error> }],
  },
]);

export default router;
