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
    { name: 'Dashboard', to: '/dashboard/profile' },
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
    } catch (error) {
      console.log(error?.message);
    }
    navigate('');
  };

  return (
    <div className="navbar flex flex-row justify-between md:px-2 items-center border-b sticky top-0 left-0 bg-white py-3 z-50">
      <div className="order-1 md:-order-1">
        <Link to={'/'}>
          <img
            src={'/old-school-logo.png'}
            alt=""
            className="w-14 h-14 md:w-16 md:h-16"
          />
        </Link>
      </div>
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
                {navigators.map((navItem, index) => (
                  <Link
                    key={index}
                    to={navItem.to}
                    className={`tracking-wider ${
                      location.pathname === navItem.to
                        ? 'underline underline-offset-4'
                        : ''
                    }`}
                  >
                    {navItem?.name}
                  </Link>
                ))}
                <Link onClick={handleLogOut}>Logout</Link>
              </>
            ) : (
              <>
                {navigators.slice(0, 4).map((navItem, index) => (
                  <Link
                    key={index}
                    to={navItem.to}
                    className={`tracking-wider ${
                      location.pathname === navItem.to
                        ? 'underline underline-offset-4'
                        : ''
                    }`}
                  >
                    {navItem?.name}
                  </Link>
                ))}
                <Link to={'/login'}>Login</Link>
                <Link to={'/signup'}>Register</Link>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-6 uppercase px-1 font-bold">
          {user && user ? (
            <>
              {navigators.map((navItem, index) => (
                <Link
                  key={index}
                  to={navItem.to}
                  className={`tracking-wider ${
                    location.pathname === navItem.to
                      ? 'underline underline-offset-4'
                      : ''
                  }`}
                >
                  {navItem?.name}
                </Link>
              ))}
            </>
          ) : (
            <>
              {navigators.slice(0, 4).map((navItem, index) => (
                <Link
                  key={index}
                  to={navItem.to}
                  className={`tracking-wider ${
                    location.pathname === navItem.to
                      ? 'underline underline-offset-8'
                      : ''
                  }`}
                >
                  {navItem?.name}
                </Link>
              ))}
            </>
          )}
        </ul>
      </div>
      <div className="flex items-center space-x-1">
        {user ? (
          <div className="hidden gap-1 md:flex items-center">
            <Link to={'/dashboard/profile'}>
              <img
                src={user?.photoURL || '/user-demo.png'}
                title={user?.displayName}
                alt="user-image"
                className="w-8 h-8 rounded-full m-1"
              />
            </Link>
            <span className="w-[2px] h-6 bg-slate-400"></span>
            <Link to={''}>
              <button onClick={handleLogOut} className="btn btn-sm rounded">
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="hidden md:flex">
              {/* <div className=" border-b">
          <input type="text" className="input input-sm rounded-sm" />
        </div> */}
              {/* <FaSearch size={20} /> */}
              {/* <img src="/user-demo.png" alt="user-image" className="w-9 h-9" /> */}
              <Link to={'/login'}>
                <button className="btn btn-sm btn-ghost rounded">login</button>
              </Link>
              <span className="w-[2px] h-6 bg-slate-400"></span>
              <Link to={'/signup'}>
                <button className="btn btn-sm btn-ghost rounded">
                  Register
                </button>
              </Link>
            </div>
            <div className="md:hidden">
              <h2 className="font-bold text-xl uppercase">oldschool</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
