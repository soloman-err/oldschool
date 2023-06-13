import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import ErrorLayout from '../layout/ErrorLayout';
import Root from '../layout/Root';
import Blog from '../pages/blog/Blog';
import Classes from '../pages/classes/Classes';
import Contact from '../pages/contact/Contact';
import AddClass from '../pages/dashboard/addClass/AddClass';
import AllUsers from '../pages/dashboard/allUsers/AllUsers';
import Analytics from '../pages/dashboard/analytics/analytics';
import MyClasses from '../pages/dashboard/myClasses/MyClasses';
import Profile from '../pages/dashboard/profile/Profile';
import Error from '../pages/error/Error';
import Home from '../pages/home/home/Home';
import Instructors from '../pages/instructors/Instructors';
import Login from '../pages/login/Login';
import Settings from '../pages/settings/Settings';
import SignUp from '../pages/signup/Signup';
import ClassDetails from '../shared/classDetails/ClassDetails';
import AboutUs from '../shared/footer/aboutUs/AboutUs';
import CookiePolicy from '../shared/footer/cookie/CookiePolicy';
import JoinUs from '../shared/footer/joinUs/JoinUs';
import Privacy from '../shared/footer/privacy/Privacy';
import Terms from '../shared/footer/terms/Terms';
import InstructorProfile from '../shared/instructors/InstructorProfile';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      { path: '/', element: <Home></Home> },
      {
        path: '/classes',
        element: <Classes></Classes>,
      },
      {
        path: '/class-details',
        element: <PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>,
      },
      { path: '/contact', element: <Contact></Contact> },
      { path: '/blog', element: <Blog></Blog> },
      { path: '/login', element: <Login></Login> },
      { path: '/signup', element: <SignUp></SignUp> },
      {
        path: '/instructor-profile',
        element: <InstructorProfile></InstructorProfile>,
      },
      { path: '/terms-of-use', element: <Terms></Terms> },
      { path: '/about-us', element: <AboutUs></AboutUs> },
      { path: '/join-oldschool', element: <JoinUs></JoinUs> },
      { path: '/privacy-policy', element: <Privacy></Privacy> },
      { path: '/cookie-policy', element: <CookiePolicy></CookiePolicy> },
      { path: '/settings', element: <Settings></Settings> },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      { path: 'profile', element: <Profile></Profile> },
      { path: 'add-class', element: <AddClass></AddClass> },
      { path: 'my-classes', element: <MyClasses></MyClasses> },
      {
        path: 'all-users',
        element: (
          // <AdminRoute>
          // </AdminRoute>
            <AllUsers></AllUsers>
        ),
      },
      {
        path: 'analytics',
        element: (
          // <AdminRoute>
          // </AdminRoute>
            <Analytics></Analytics>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <ErrorLayout />,
    children: [{ path: '*', element: <Error></Error> }],
  },
]);

export default router;
