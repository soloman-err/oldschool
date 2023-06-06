import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigators = [
    { name: 'Home', to: '/' },
    { name: 'Courses', to: '/courses' },
    { name: 'Features', to: '/features' },
    { name: 'Events', to: '/events' },
    { name: 'Blog', to: '/blog' },
  ];

  return (
    <div className="navbar flex justify-between px-10 items-center bg-zinc-700">
      <div className="flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <FaBars size={20} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-zinc-700 mt-3 p-2 space-y-2 shadow-lg rounded w-52 uppercase"
          >
            {navigators.map((navitem, index) => (
              <Link key={index} to={`${navitem?.to}`}>
                {navitem?.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
        <Link to={"/"} className="text-xl md:text-2xl lg:text-4xl font-bold">Oldschool.</Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-6 uppercase px-1 font-bold">
          {navigators.map((navitem, index) => (
            <Link key={index} to={`${navitem?.to}`}>
              {navitem?.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
