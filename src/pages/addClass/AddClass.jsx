import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';

const AddClass = () => {
  const { user } = useAuth();

  return (
    <div>
      <Helmet>oldschool | Add A Class</Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Instructor name"
                  className="input input-bordered rounded-sm "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  placeholder="class name"
                  className="input input-bordered rounded-sm "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Image</span>
                </label>
                <input type="file" className="file-input w-full max-w-xs rounded-sm " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="number"
                  placeholder="$ 00.00"
                  className="input input-bordered rounded-sm "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="input input-bordered rounded-sm "
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-wider rounded-sm btn-neutral">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
