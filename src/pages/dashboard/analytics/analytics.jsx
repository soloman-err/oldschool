import React from 'react';
import { Helmet } from 'react-helmet-async';
import Chart from './Chart';

const Analytics = () => {
  return (
    <section className="">
      <Helmet>
        <title>oldschool | Analytics</title>
      </Helmet>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center relative">
          {/* page content */}
          <div className="bg-zinc-50 px-2 md:px-0 w-full h-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3">
              <div className="bg-zinc-800 rounded overflow-hidden">
                <div className="p-2 bg-zinc-200">
                  <h3 className="text-xl font-bold">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="px-2 text-2xl text-center py-5 text-white font-bold">
                  <h2>$1200</h2>
                </div>
              </div>

              <div className="bg-zinc-800 rounded overflow-hidden">
                <div className="p-2 bg-zinc-200">
                  <h3 className="text-xl font-bold">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="px-2 text-2xl text-center py-5 text-white font-bold">
                  <h2>$1200</h2>
                </div>
              </div>

              <div className="bg-zinc-800 rounded overflow-hidden">
                <div className="p-2 bg-zinc-200">
                  <h3 className="text-xl font-bold">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="px-2 text-2xl text-center py-5 text-white font-bold">
                  <h2>$1200</h2>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 m-3 p-3 rounded">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
