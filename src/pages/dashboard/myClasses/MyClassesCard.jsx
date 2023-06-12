import React from 'react';
import { Link } from 'react-router-dom';

const MyClassesCard = () => {
  return (
    <div className="h-60">
      <div className="relative w-full h-full border border-zinc-500 pr-3 border-t-0 border-l-0">
        <span className="absolute -right-1 -top-2 bg-green-500 animate-ping rounded-full w-2 h-2"></span>
        <div className="text-3xl h-full bg-zinc-500 p-1 flex justify-center items-center">
          image
        </div>

        <Link to={'/class-details'}>
          <button className="btn btn-ghost btn-sm rounded-none bg-zinc-900 text-white w-full border-t-0 border-zinc-500">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyClassesCard;
