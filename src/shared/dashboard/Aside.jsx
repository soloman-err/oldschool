import React from 'react';
import { FaBook, FaHome, FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { IoMdSettings } from 'react-icons/io';
import { MdTableChart } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const Aside = () => {
  const { user, logOut, setLoading } = useAuth();
  const navigate = useNavigate();

  // user logout:
  const handleLogOut = () => {
    try {
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
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    // <aside className="w-[40%] xl:w-[20%] bg-slate-600 py-5">
    //   <div className="w-[90%] mx-auto">
    //     <img
    //       src={(user && user?.photoURLL) || '/user-demo.png'}
    //       alt="user-profile-image"
    //       className="md:w-40 md:h-40 mx-auto mt-1 p-2 rounded-full"
    //     />
    //     <div>
    //       {user && user ? (
    //         <div className="text-center">
    //           <h2 className="text-2xl">{user?.displayName}</h2>
    //           <small className="">{user?.email.split('@')[0]}</small>
    //         </div>
    //       ) : (
    //         <> </>
    //       )}
    //     </div>
    //   </div>
    //   <div>
    //     <ul className="w-[90%] mx-auto mt-5 space-y-1">
    //       <li className="rounded bg-slate-500">
    //         <Link
    //           to={'/'}
    //           className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
    //         >
    //           <FaUser size={20} />
    //           My Profile
    //         </Link>
    //       </li>
    //       <li className="rounded bg-slate-500">
    //         <Link
    //           to={'/'}
    //           className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
    //         >
    //           <FaBook size={20} /> Add a class
    //         </Link>
    //       </li>
    //       <li className="rounded bg-slate-500">
    //         <Link
    //           to={'/'}
    //           className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
    //         >
    //           <MdTableChart size={20} /> My classes
    //         </Link>
    //       </li>
    //     </ul>
    //     <span className="divider"></span>
    //     <ul className="w-[90%] mx-auto mt-1 space-y-1">
    //       <li className="w-full rounded bg-slate-500">
    //         <Link
    //           to={'/'}
    //           className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
    //         >
    //           <FaHome size={20} /> Home
    //         </Link>
    //       </li>
    //       <li className="w-full rounded bg-slate-500">
    //         <Link
    //           to={'/'}
    //           className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
    //         >
    //           <IoMdSettings size={20} /> Settings
    //         </Link>
    //       </li>
    //       <li className="w-full rounded bg-slate-500">
    //         <Link
    //           to={'/'}
    //           className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
    //           onClick={handleLogOut}
    //         >
    //           <FiLogOut size={20} /> Logout
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </aside>
    <aside className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <div className="w-[70%] md:w-full bg-slate-600 py-5 menu p-4 h-full space-y-2 mt-20 md:mt-0">
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
                <small className="">{user?.email.split('@')[0]}</small>
              </div>
            ) : (
              <> </>
            )}
          </div>
        </div>
        <div>
          <ul className="mx-auto mt-5 space-y-1">
            <li className="rounded bg-slate-500">
              <Link
                to={'/'}
                className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
              >
                <FaUser size={20} />
                My Profile
              </Link>
            </li>
            <li className="rounded bg-slate-500">
              <Link
                to={'/'}
                className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
              >
                <FaBook size={20} /> Add a class
              </Link>
            </li>
            <li className="rounded bg-slate-500">
              <Link
                to={'/'}
                className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
              >
                <MdTableChart size={20} /> My classes
              </Link>
            </li>
          </ul>
          <span className="divider"></span>
          <ul className="mx-auto mt-1 space-y-1">
            <li className="w-full rounded bg-slate-500">
              <Link
                to={'/'}
                className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
              >
                <FaHome size={20} /> Home
              </Link>
            </li>
            <li className="w-full rounded bg-slate-500">
              <Link
                to={'/'}
                className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
              >
                <IoMdSettings size={20} /> Settings
              </Link>
            </li>
            <li className="w-full rounded bg-slate-500">
              <Link
                to={'/'}
                className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
                // onClick={handleLogOut}
              >
                <FiLogOut size={20} /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
