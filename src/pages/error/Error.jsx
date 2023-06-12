import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div
      className="text-center"
    >
      <Helmet><title>Something went wrong⚠️</title></Helmet>
      <Player
        src="https://assets1.lottiefiles.com/packages/lf20_49yefrcy.json"
        className="w-[80%] h-[80vh] md:h-[90vh]"
        background="transparent"
        speed="1"
        loop
        controls
        autoplay
      ></Player>
      <Link to={'/'} className="btn btn-wide btn-sm font-bold tracking-widest">
        <FaArrowLeft />
        Back to school
      </Link>
    </div>
  );
};

export default Error;
