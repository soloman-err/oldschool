import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { IoMdSettings } from 'react-icons/io';
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
    <aside className="w-[30%] xl:w-[20%] bg-slate-600 py-5">
      <div className='w-[90%] mx-auto'>
        <img
          src="/user-demo.png"
          alt="user-profile-image"
          className="md:w-56 md:h-56 mx-auto mt-10 bg-slate-400 rounded-xl p-5"
        />
        <div>
          {user && user ? (
            <div className="text-center">
              <h2 className="text-2xl">{user?.displayName}</h2>
            <small className=''>{user?.email.split("@")[0]}</small>
            </div>
          ) : (
            <> </>
          )}
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-5 space-y-1">
        <div className="rounded bg-slate-500">
          <Link
            to={'/'}
            className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
          >
            <FaHome size={20} /> Home
          </Link>
        </div>
        <div className="w-full rounded bg-slate-500">
          <Link
            to={'/'}
            className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
          >
            <IoMdSettings size={20} /> Settings
          </Link>
        </div>

        <div className="w-full rounded bg-slate-500">
          <Link
            to={'/'}
            className="flex flex-row gap-2 md:text-xl p-1 md:p-2 items-center"
            onClick={handleLogOut}
          >
            <FiLogOut size={20} /> Logout
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
