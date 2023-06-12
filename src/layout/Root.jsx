import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';

const Root = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <>
        <Navbar />
        <Outlet></Outlet>
      </>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
