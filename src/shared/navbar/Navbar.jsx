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
    <div className="navbar flex justify-between md:px-10 items-center shadow-lg rounded-lg">
      <div className="flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <FaBars size={20} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 space-y-3 shadow-lg rounded w-52 uppercase font-semibold bg-base-100"
          >
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
        <div>
          {/* <Link to={"/"} className="text-xl md:text-3xl lg:text-4xl font-bold">Oldschool.</Link> */}
          <img
            src={'../../../src/assets/old-school-logo.png'}
            alt=""
            className="w-16 h-16"
          />
        </div>
      </div>
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-6 uppercase px-1 xl:text-lg font-bold">
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
    </div>
  );
};

export default Navbar;
