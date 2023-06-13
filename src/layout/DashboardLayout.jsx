import { FaArrowRight, FaBook, FaHome, FaUser, FaUsers } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { IoMdDocument, IoMdLogIn, IoMdSettings } from 'react-icons/io';
import { MdDisabledByDefault, MdTableChart } from 'react-icons/md';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const { user, logOut, setLoading } = useAuth();
  const navigate = useNavigate();

  // exit aside-menu:
  const closeDrawer = () => {
    const checkbox = document.getElementById('my-drawer-2');
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  // logout:
  const handleLogOut = () => {
    try {
      if (user) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You'll be logged out!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Log Out!',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Logged Out',
              'Thank you for being with oldschool',
              'success'
            );
            logOut();
            navigate('/');
          }
        });
      } else {
        Swal.fire({
          title: 'Please login first!',
          icon: 'warning',
          confirmButtonText: 'login',
          showCancelButton: true,
          cancelButtonColor: '#d33',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login');
          }
        });
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <>
        <Navbar />

        <div className="drawer md:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content overflow-y-auto flex flex-col md:px-10">
            <label
              htmlFor="my-drawer-2"
              className="drawer-button md:hidden bg-zinc-900 text-white p-2 btn mr-auto mt-1 ml-1 rounded-sm btn-sm"
            >
              <FaArrowRight width={200} />
            </label>

            {/* Page content */}
            <Outlet />
          </div>

          {/* drawer-side-menu */}
          <div className="drawer-side bg-zinc-950 h-full text-white z-10">
            <div className="w-[80%] md:w-full text-white pt-5 p-5 h-full space-y-2 mt-20 md:mt-0 border-r border-zinc-800">
              <label
                htmlFor="my-drawer-2"
                className="drawer-close justify-end flex md:hidden"
              >
                <MdDisabledByDefault size={30} className="" />
              </label>
              <div className="md:hidden text-center">
                <img
                  src={user?.photoURL || '/user-demo.png'}
                  alt="user-placeholder-image"
                  className="w-16 mx-aut rounded-full"
                />
              </div>

              <div className="mx-auto pb-5">
                <div>
                  {user && user ? (
                    <div className="">
                      <h2 className="text-2xl">{user?.displayName}</h2>
                      <p className="">{user?.role || user?.email}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              {/* Sidebar content */}
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="w-full h-full space-y-2">
                <li className="rounded bg-zinc-700">
                  <Link
                    to={'profile'}
                    className="flex flex-row gap-2 md:text-md p-1 md:p-2 items-center"
                    onClick={closeDrawer}
                  >
                    <FaUser size={15} />
                    My Profile
                    <span className="badge badge-sm ml-auto bg-green-300 border-none">
                      {'admin'}
                    </span>
                  </Link>
                </li>
                <li className="rounded bg-zinc-700">
                  <Link
                    to={'add-class'}
                    className="flex flex-row gap-2 md:text-md p-1 md:p-2 items-center"
                    onClick={closeDrawer}
                  >
                    <FaBook size={15} /> Add a class
                  </Link>
                </li>
                <li className="rounded bg-zinc-700">
                  <Link
                    to={'my-classes'}
                    className="flex flex-row gap-2 md:text-md p-1 md:p-2 items-center"
                    onClick={closeDrawer}
                  >
                    <MdTableChart size={15} /> My classes
                  </Link>
                </li>
                <li className="rounded bg-zinc-700">
                  <Link
                    to={'all-users'}
                    className="flex flex-row gap-2 md:text-md p-1 md:p-2 items-center"
                    onClick={closeDrawer}
                  >
                    <FaUsers size={15} /> All users
                  </Link>
                </li>
                <li className="rounded bg-zinc-700">
                  <Link
                    to={'analytics'}
                    className="flex flex-row gap-2 md:text-md p-1 md:p-2 items-center"
                    onClick={closeDrawer}
                  >
                    <TbAdjustmentsHorizontal size={15} /> Analytics
                  </Link>
                </li>

                <div className="divider"></div>

                <li className="w-full rounded bg-zinc-700">
                  <Link
                    to={'/'}
                    className="flex flex-row gap-2 md:text-md p-1 md:p-2 items-center"
                    onClick={closeDrawer}
                  >
                    <FaHome size={15} /> Home
                  </Link>
                </li>
                <li className="w-full rounded bg-zinc-700">
                  <Link
                    to={'/settings'}
                    className="flex flex-row gap-2 md:text-md p-1 md:p-2 items-center"
                    onClick={closeDrawer}
                  >
                    <IoMdSettings size={15} /> Settings
                  </Link>
                </li>
                <li className="w-full rounded bg-zinc-700">
                  <Link
                    to={'/login'}
                    className="flex flex-row gap-2 md:text-md p-1 md:p-2 items-center"
                    onClick={closeDrawer}
                  >
                    <IoMdLogIn size={15} /> Login
                  </Link>
                </li>
                <li className="w-full rounded bg-zinc-700">
                  <Link
                    to={'/signup'}
                    className="flex flex-row gap-2 md:text-md p-1 md:p-2 items-center"
                    onClick={closeDrawer}
                  >
                    <IoMdDocument size={15} /> Register
                  </Link>
                </li>
                <li className="w-full rounded bg-zinc-700">
                  <Link
                    to={''}
                    className="flex flex-row gap-2 md:text-md p-1 md:p-2 items-center"
                    // onClick={closeDrawer}
                    onClick={handleLogOut}
                  >
                    <FiLogOut size={15} /> Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
