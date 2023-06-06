import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigators = [
    { name: 'Home', to: "/" },
    { name: 'Courses', to: "/courses" },
    { name: 'Features', to: "/features"},
    { name: 'Events', to: "/events" },
    { name: 'Blog', to: "/blog" },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
           <FaBars size={20}/>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigators.map((navitem, index) => (
              <Link key={index} to={`${navitem?.to}`}>{navitem?.name}</Link>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigators.map((navitem, index) => (
            <Link key={index} to={`${navitem?.to}`}>{navitem?.name}</Link>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
