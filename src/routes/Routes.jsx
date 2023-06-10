import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import ErrorLayout from '../layout/ErrorLayout';
import Root from '../layout/Root';
import Blog from '../pages/blog/Blog';
import Classes from '../pages/classes/Classes';
import Contact from '../pages/contact/Contact';
import Error from '../pages/error/Error';
import Home from '../pages/home/home/Home';
import Instructors from '../pages/instructors/Instructors';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Dashboard from '../shared/dashboard/Dashboard';
import Profile from '../shared/profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/classes', element: <Classes></Classes> },
      { path: '/instructors', element: <Instructors></Instructors> },
      { path: '/contact', element: <Contact></Contact> },
      { path: '/blog', element: <Blog></Blog> },
      { path: '/login', element: <Login></Login> },
      { path: '/signup', element: <Signup></Signup> },
      { path: '/profile', element: <Profile></Profile> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [{ path: '/dashboard', element: <Dashboard></Dashboard> }],
  },
  {
    path: '*',
    element: <ErrorLayout />,
    children: [{ path: '*', element: <Error></Error> }],
  },
]);

export default router;
