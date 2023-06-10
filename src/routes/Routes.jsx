import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import ErrorLayout from '../layout/ErrorLayout';
import Root from '../layout/Root';
import Blog from '../pages/blog/Blog';
import Classes from '../pages/classes/Classes';
import Contact from '../pages/contact/Contact';
import AllUsers from '../pages/dashboard/allUsers/AllUsers';
// import Analytics from '../pages/dashboard/analytics/analytics';
import AddClass from '../pages/dashboard/addClass/AddClass';
import MyClasses from '../pages/dashboard/myClasses/MyClasses';
import Profile from '../pages/dashboard/profile/Profile';
import Error from '../pages/error/Error';
import Home from '../pages/home/home/Home';
import Instructors from '../pages/instructors/Instructors';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/Signup';

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
      { path: '/signup', element: <SignUp></SignUp> },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      { path: 'profile', element: <Profile></Profile> },
      // { path: 'analytics', element: <Analytics></Analytics> },
      { path: 'all-users', element: <AllUsers></AllUsers> },
      { path: 'add-class', element: <AddClass></AddClass> },
      { path: 'my-classes', element: <MyClasses></MyClasses> },
    ],
  },
  {
    path: '*',
    element: <ErrorLayout />,
    children: [{ path: '*', element: <Error></Error> }],
  },
]);

export default router;
