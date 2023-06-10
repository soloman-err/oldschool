import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaArrowRight } from 'react-icons/fa';
import Aside from './Aside';
import Chart from './Chart';


const Dashboard = () => {
  return (
    <section className=''>
      <Helmet>
        <title>oldschool | Dashboard</title>
      </Helmet>
      
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center relative">
          
          {/* page content */}
          <div className="bg-slate-200 mt-10 md:mt-0 w-full h-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3">
              <div className="bg-slate-500 rounded overflow-hidden">
                <div className="p-2 bg-slate-300">
                  <h3 className="text-xl font-bold">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="px-2 text-2xl text-center py-5">
                  <h2>$1200</h2>
                </div>
              </div>

              <div className="bg-slate-500 rounded overflow-hidden">
                <div className="p-2 bg-slate-300">
                  <h3 className="text-xl font-bold">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="px-2 text-2xl text-center py-5">
                  <h2>$1200</h2>
                </div>
              </div>

              <div className="bg-slate-500 rounded overflow-hidden">
                <div className="p-2 bg-slate-300">
                  <h3 className="text-xl font-bold">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="px-2 text-2xl text-center py-5">
                  <h2>$1200</h2>
                </div>
              </div>
            </div>

            <div className="bg-slate-600 m-3 p-3 rounded">
              <h1 className="mt-auto">Lorem ipsum dolor sit amet.</h1>
              <Chart/>
            </div>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="drawer-button lg:hidden left-0 p-1 absolute top-0"
          >
            <div className="bg-slate-600 p-1 rounded-full inline-block">
              <FaArrowRight size={20} />
            </div>
          </label>
        </div>

        {/* drawer-side */}
        <Aside/>
      </div>
    </section>
  );
};

export default Dashboard;
