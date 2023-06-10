import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../shared/dashboard/Aside';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />

      <section className="flex flex-row h-full">
        <Aside />
        <main className="w-full h-full">
          <Outlet />
        </main>
      </section>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
