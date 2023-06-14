import React from 'react';
import { Helmet } from 'react-helmet-async';
import useClasses from '../../../hooks/useClasses';
import useInstructors from '../../../hooks/useInstructors';
import useUsers from '../../../hooks/useUsers';
import Chart from './chart/Chart';

const Analytics = () => {
  const [users] = useUsers();
  const [classes] = useClasses();
  const [instructors] = useInstructors();

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 text-center">
              <div className="bg-zinc-800 rounded overflow-hidden">
                <div className="p-2 bg-zinc-200">
                  <h3 className="text-xl font-bold">Total Users</h3>
                </div>

                <div className="px-2 text-2xl py-2 text-white font-bold">
                  <h2>{users?.length}</h2>
                </div>
              </div>

              <div className="bg-zinc-800 rounded overflow-hidden">
                <div className="p-2 bg-zinc-200">
                  <h3 className="text-xl font-bold">Total Classes</h3>
                </div>
                <div className="px-2 text-2xl py-5 text-white font-bold">
                  <h2>{classes?.length}</h2>
                </div>
              </div>

              <div className="bg-zinc-800 rounded overflow-hidden">
                <div className="p-2 bg-zinc-200">
                  <h3 className="text-xl font-bold">Total Instructors</h3>
                </div>
                <div className="px-2 text-2xl py-5 text-white font-bold">
                  <h2>{instructors?.length}</h2>
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
