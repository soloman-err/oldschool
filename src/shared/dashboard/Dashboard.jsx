import React from 'react';
import { Helmet } from 'react-helmet-async';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <section className=''>
      <Helmet>
        <title>oldschool | Dashboard</title>
      </Helmet>
      <div className="bg-slate-200">
        {/* <div className="stats flex flex-col md:flex-row shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3">
          <div className="bg-slate-500 rounded overflow-hidden">
            <div className="p-2 bg-slate-300">
              <h3 className="text-xl font-bold">Lorem ipsum dolor sit amet.</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="px-2 text-2xl text-center py-5">
              <h2>$1200</h2>
            </div>
          </div>

          <div className="bg-slate-500 rounded overflow-hidden">
            <div className="p-2 bg-slate-300">
              <h3 className="text-xl font-bold">Lorem ipsum dolor sit amet.</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="px-2 text-2xl text-center py-5">
              <h2>$1200</h2>
            </div>
          </div>

          <div className="bg-slate-500 rounded overflow-hidden">
            <div className="p-2 bg-slate-300">
              <h3 className="text-xl font-bold">Lorem ipsum dolor sit amet.</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="px-2 text-2xl text-center py-5">
              <h2>$1200</h2>
            </div>
          </div>
        </div>
        
        <div className='bg-slate-600 m-3 p-3 rounded'>
            <h1 className='mt-auto'>Lorem ipsum dolor sit amet.</h1>
            <Chart/>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
