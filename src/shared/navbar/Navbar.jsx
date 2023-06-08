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
    <div className="navbar flex flex-row justify-between md:px-2 items-center border-b sticky top-0 bg-white py-1 z-10">
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
      </div>
    </div>
  );
};

export default Navbar;
