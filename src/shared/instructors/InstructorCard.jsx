import React from 'react';
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InstructorCard = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full border border-zinc-300 shadow-lg hover:shadow-md translate-z-60 overflow-hidden rounded">
      <figure>
        <img src="/instructor-i.jpg" alt="class-image" className="w-full" />
      </figure>
      <div className="pb-20 py-4">
        <div className="px-3">
          <h2 className="card-title">David J. Malan</h2>
          <p>
            How to park your car at your garage? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus modi accusamus amet
            aspernatur.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between px-1 bg-zinc-200 py-2 items-center">
        <Link to={"/instructor-profile"}>
          <button className="btn btn-sm bg-black hover:bg-zinc-400 text-white p-1 px-3 text-xs rounded">
            View details
          </button>
        </Link>
        <div className="flex gap-1">
          <FaGooglePlusSquare size={22} />
          <FaFacebookSquare size={22} />
          <FaTwitterSquare size={22} />
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
