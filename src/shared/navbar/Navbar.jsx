import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigators = [
    { name: 'Home', to: '/' },
    { name: 'Courses', to: '/courses' },
    { name: 'Features', to: '/features' },
    { name: 'Events', to: '/events' },
    { name: 'Blog', to: '/blog' },
  ];

  const location = useLocation();

  return (
    <div className="navbar flex justify-between md:px-5 items-center shadow-md py-1">
      <div className="flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <FaBars size={20} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 space-y-3 shadow-lg rounded w-52 uppercase font-semibold bg-white z-50"
          >
            {navigators.map((navitem, index) => (
              <Link
                key={index}
                to={navitem.to}
                className={`tracking-wider z-50 ${
                  location.pathname === navitem.to
                    ? 'underline underline-offset-4'
                    : ''
                }`}
              >
                {navitem?.name}
              </Link>
            ))}
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
        </ul>
      </div>
      <div className="flex items-center space-x-1">
        <Link to={"/login"}>
          <button className="btn btn-sm btn-ghost rounded-sm">login</button>
        </Link>
        <span className="w-[2px] h-6 bg-slate-400"></span>
        <Link to={"/signup"}>
          <button className="btn btn-sm btn-ghost rounded-sm">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
