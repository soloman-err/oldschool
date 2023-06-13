import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({ singleClass }) => {
  const { image, price, seats, subject, _id } = singleClass;

  return (
    <div className="w-full h-full md:h-80 flex flex-col md:flex-row md:items-center gap-2 md:gap-5 bg-zinc-200 border md:border-none border-zinc-400">
      <div className="order-2 md:w-2/4 space-y-1 md:mt-0 px-3 pb-3">
        <h1 className="text-xl md:text-4xl font-bold">
          {subject}
        </h1>
        <p className="font-bold">
          Price: ${price}
        </p>
        <p className="font-bold">Total seats: {seats}</p>
      </div>

      <div className="w-full md:w-[50%] h-full border border-slate-500 md:pr-3 border-t-0 border-l-0">
        <div className="text-3xl h-full bg-zinc-50 flex justify-center items-center">
          <img src={image} alt={subject + "-image"} className='w-full h-full object-cover'/>
        </div>
        <Link to={'/class-details'}>
          <button className="btn btn-ghost btn-sm rounded-none bg-zinc-900 text-white w-full border-t-0 border-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
