import React from 'react';
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

const Card = () => {
  return (
    <div className="relative w-full h-[400px] border border-slate-400 translate-z-60 overflow-hidden">
      <figure>
        <img src="/instructor-i.jpg" alt="class-image" className="w-full" />
      </figure>
      <div className="pb-20 py-4">
        <div className="px-3">
          <h2 className="card-title">David J. Malan</h2>
          <p>How to park your car at your garage? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus modi accusamus amet aspernatur.</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-between px-1 bg-zinc-200 py-2 items-center">
          <button className="rounded-sm btn btn-sm bg-black text-white p-1 px-3 text-sm">
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
