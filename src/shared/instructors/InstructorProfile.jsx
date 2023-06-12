import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const InstructorProfile = () => {
  const { user } = useAuth();

  return (
    <section>
      <Helmet>
        <title>oldschool | Instructor-profile</title>
      </Helmet>

      <div className="w-[90%] my-5 md:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row border divide-x-2 bg-zinc-50">
          <div className="w-full">
            <div className="relative text-center mx-auto">
              <div className="p-2">
                <img
                  src="/instructor-i.jpg"
                  alt="profile-cover-image"
                  className="relative w-full h-[100px] md:h-[150px] object-cover"
                />
                <img
                  src={user ? user?.photoURL : '/user-demo.png'}
                  alt="user-profile-image"
                  className="absolute -translate-y-10 rounded-full left-5 w-20 h-20 border-4 border-white"
                />
              </div>

              <h2 className="text-xl">{user?.displayName}</h2>
            </div>

            <div className="py-10 px-4">
              <h2 className="text-2xl font-bold">Antonio Joseph</h2>
              <div className="flex flex-row gap-2 mb-2">
                <span className="opacity-80 font-bold bg-sky-50 border border-slate-400 px-2 rounded-full">
                  Instructor
                </span>
                <span className="flex items-center gap-1 font-bold text-sky-500">
                  <FaUser />
                  10k
                </span>
              </div>
              <hr />
              <div className="mt-5">
                <p className="">
                  <span className="font-bold">Total Classes: </span>78
                </p>
              </div>
            </div>
          </div>

          <div className="w-full p-4">
            <h3 className="text-xl font-bold">About Me</h3>
            <p className="text-slate-700 opacity-90">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              illum veritatis illo voluptatem omnis iusto veniam modi possimus
              hic placeat ratione doloribus repellendus.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 py-5 flex justify-center items-center gap-5 text-xl text-white">
          <Link to={'https://twitter.com'}>
            <FaTwitter />
          </Link>
          <Link to={'https://linkedin.com'}>
            <FaLinkedin />
          </Link>
          <Link to={'https://facebook.com'}>
            <FaFacebook />
          </Link>
          <Link to={'https://instagram.com'}>
            <FaInstagram />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
