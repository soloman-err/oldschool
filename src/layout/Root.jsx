import { Outlet } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';

const Root = () => {
  return (
    <div className="relative">
      <Navbar />

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
