import { FaArrowRight, FaBook, FaHome, FaUser, FaUsers } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { IoMdSettings } from 'react-icons/io';
import { MdDisabledByDefault, MdTableChart } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';

const DashboardLayout = () => {
  const { user, logOut, setLoading } = useAuth();

  const closeDrawer = () => {

    // exit menu func:
    const checkbox = document.getElementById('my-drawer-2');
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  return (
    <>
      <Navbar />

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="drawer-button md:hidden bg-slate-900 text-white p-2 btn mr-auto mt-1 ml-1 rounded-sm btn-sm"
          >
            <FaArrowRight width={200} />
          </label>

          <Outlet />
        </div>

        {/* drawer-side-menu */}
        <div className="drawer-side bg-slate-900 h-full text-white z-10">
          <div className="men w-[80%] md:w-full bg-slate-800 text-white py-5 p-5 h-ful space-y-2 mt-20 md:mt-0">
            <label
              htmlFor="my-drawer-2"
              className="drawer-close justify-end flex md:hidden"
            >
              <MdDisabledByDefault size={30} />
            </label>

            <div className="w- mx-auto">
              <img
                src={(user && user?.photoURL) || '/user-demo.png'}
                alt="user-profile-image"
                className="md:w-40 md:h-40 mx-auto mt-1 p-2 rounded-full"
              />
              <div>
                {user && user ? (
                  <div className="text-center">
                    <h2 className="text-2xl">{user?.displayName}</h2>
                    <p className="">
                      {user?.role || user?.email.split('@')[0]}
                    </p>
                  </div>
                ) : (
                  <> </>
                )}
              </div>
            </div>
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="w-full h-full space-y-2">
              {/* Sidebar content here */}
              <li className="rounded bg-slate-500">
                <Link
                  to={'profile'}
                  className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
                  onClick={closeDrawer}
                >
                  <FaUser size={20} />
                  My Profile
                </Link>
              </li>
              <li className="rounded bg-slate-500">
                <Link
                  to={'add-class'}
                  className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
                  onClick={closeDrawer}
                >
                  <FaBook size={20} /> Add a class
                </Link>
              </li>
              <li className="rounded bg-slate-500">
                <Link
                  to={'my-classes'}
                  className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
                  onClick={closeDrawer}
                >
                  <MdTableChart size={20} /> My classes
                </Link>
              </li>
              <li className="rounded bg-slate-500">
                <Link
                  to={'all-users'}
                  className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
                  onClick={closeDrawer}
                >
                  <FaUsers size={20} /> All users
                </Link>
              </li>
              <div className="divider"></div>
              <li className="w-full rounded bg-slate-500">
                <Link
                  to={'/'}
                  className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
                  onClick={closeDrawer}
                >
                  <FaHome size={20} /> Home
                </Link>
              </li>
              <li className="w-full rounded bg-slate-500">
                <Link
                  to={'settings'}
                  className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
                  onClick={closeDrawer}
                >
                  <IoMdSettings size={20} /> Settings
                </Link>
              </li>
              <li className="w-full rounded bg-slate-500">
                <Link
                  to={''}
                  className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
                  onClick={closeDrawer}
                  // onClick={handleLogOut}
                >
                  <FiLogOut size={20} /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
    // <div>
    //   <Navbar />

    //   <section className="flex flex-row h-full">
    //     <Aside />
    //     <main className="w-full h-full">
    //       <Outlet />
    //     </main>
    //   </section>

    // </div>
  );
};

export default DashboardLayout;
