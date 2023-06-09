import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';
import Aside from '../shared/profile/Aside';

const ProfileLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-row h-full">
        <Aside/>
        <main>
          <Outlet />
        </main>
      </section>
      <Footer/>
    </div>
  );
};

export default ProfileLayout;
