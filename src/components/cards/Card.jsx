import React from 'react';
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

const Card = () => {
  return (
    <div className="relative w-full border border-slate-400 translate-z-60">
      <figure>
        <img src="/instructor-i.jpg" alt="class-image" className="w-full" />
      </figure>
      <div className="pb-20 py-4">
        <div className="px-3">
          <h2 className="card-title">David J. Malan</h2>
          <p>How to park your car at your garage?</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-between px-1 bg-zinc-200 py-2 items-end">
          <button className="rounded-sm bg-black text-white p-1 px-3 text-sm">
            View details
          </button>
          <div className="flex gap-1">
            <FaGooglePlusSquare size={20} />
            <FaFacebookSquare size={20} />
            <FaTwitterSquare size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
