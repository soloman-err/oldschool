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
    <div className="navbar absolute z-50 flex justify-between md:px-10 items-center shadow-lg">
      <div className="flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <FaBars size={20} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 space-y-3 shadow-lg rounded w-52 uppercase font-semibold"
          >
            {navigators.map((navitem, index) => (
              <Link key={index} to={`${navitem?.to}`}>
                {navitem?.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
        <Link to={"/"} className="text-xl md:text-3xl lg:text-4xl font-bold">Oldschool.</Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-6 uppercase px-1 xl:text-lg font-semibold">
          {navigators.map((navitem, index) => (
            <Link key={index} to={`${navitem?.to}`} className='tracking-wider'>
              {navitem?.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
