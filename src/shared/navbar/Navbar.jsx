import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const navigators = [
    { name: 'Home', to: '/' },
    { name: 'Classes', to: '/classes' },
    { name: 'Instructors', to: '/instructors' },
    { name: 'Contact', to: '/contact' },
    { name: 'Dashboard', to: '/dashboard' },
  ];

  const { user, logOut } = useAuth();

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
        }
      });
      navigate('/');
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <div className="navbar flex flex-row justify-between md:px-2 items-center border-b sticky top-0 bg-white py-3 z-10">
      <div className="flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <FaBars size={20} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 space-y-3 shadow-lg rounded w-52 uppercase font-semibold bg-base-100"
          >
            {user && user ? (
              <>
                {navigators.map((navitem, index) => (
                  <Link
                    key={index}
                    to={navitem.to}
                    className={`tracking-wider ${
                      location.pathname === navitem.to
                        ? 'underline underline-offset-4'
                        : ''
                    }`}
                  >
                    {navitem?.name}
                  </Link>
                ))}
              </>
            ) : (
              <>
                {navigators.slice(0, 4).map((navitem, index) => (
                  <Link
                    key={index}
                    to={navitem.to}
                    className={`tracking-wider ${
                      location.pathname === navitem.to
                        ? 'underline underline-offset-4'
                        : ''
                    }`}
                  >
                    {navitem?.name}
                  </Link>
                ))}
              </>
            )}
          </ul>
        </div>
        <div>
          <Link to={'/'}>
            <img src={'/old-school-logo.png'} alt="" className="w-16 h-16" />
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-6 uppercase px-1 font-semibold">
          {user && user ? (
            <>
              {navigators.map((navitem, index) => (
                <Link
                  key={index}
                  to={navitem.to}
                  className={`tracking-wider ${
                    location.pathname === navitem.to
                      ? 'underline underline-offset-4'
                      : ''
                  }`}
                >
                  {navitem?.name}
                </Link>
              ))}
            </>
          ) : (
            <>
              {navigators.slice(0, 4).map((navitem, index) => (
                <Link
                  key={index}
                  to={navitem.to}
                  className={`tracking-wider ${
                    location.pathname === navitem.to
                      ? 'underline underline-offset-4'
                      : ''
                  }`}
                >
                  {navitem?.name}
                </Link>
              ))}
            </>
          )}
        </ul>
      </div>
      <div className="flex items-center space-x-1">
        {user ? (
          <>
            <Link to={'/profile'}>
              <img
                src={user?.photoURL || '/user-demo.png'}
                title={user?.displayName}
                alt="user-image"
                className="w-8 h-8 rounded-full m-1"
              />
            </Link>
            <span className="w-[2px] h-6 bg-slate-400"></span>
            <Link to={''}>
              <button onClick={handleLogOut} className="btn btn-sm btn-ghost">
                Logout
              </button>
            </Link>
          </>
        ) : (
          <>
            {/* <div className=" border-b">
          <input type="text" className="input input-sm rounded-sm" />
        </div> */}
            {/* <FaSearch size={20} /> */}
            {/* <img src="/user-demo.png" alt="user-image" className="w-9 h-9" /> */}
            <Link to={'/login'}>
              <button className="btn btn-sm btn-ghost">login</button>
            </Link>
            <span className="w-[2px] h-6 bg-slate-400"></span>
            <Link to={'/signup'}>
              <button className="btn btn-sm btn-ghost">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
