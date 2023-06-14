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
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  const { displayName, email, photoURL } = user;

  return (
    <>
      <Helmet>
        <title>oldschool | profile</title>
      </Helmet>

      <section className="w-[90%] my-5 md:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row border divide-x-2 bg-zinc-50">
          <div className="w-full">
            <div className="relative text-center mx-auto">
              <div className="p-2">
                <img
                  src="/instructor-i.jpg"
                  alt="profile-cover-image"
                  className="relative w-full h-[150px] md:h-[200px] lg:h-[300px] object-cover"
                />
                <img
                  src={user ? photoURL : '/user-demo.png'}
                  alt="user-profile-image"
                  className="absolute -translate-y-10 rounded-full left-5 w-20 h-20 border-4 border-white object-cover"
                />
              </div>

              <h2 className="text-xl"></h2>
            </div>

            <div className="pt-10 px-4">
              <h2 className="text-2xl font-bold">{displayName}</h2>
              <div className="flex flex-row items-center gap-2 mb-2">
                <span className="opacity-80 text-sm tracking-wide font-bold bg-sky-50 border border-slate-400 px-2 rounded-full">
                  User
                </span>
                <span className="flex items-center gap-1 font-bold text-sky-500">
                  <FaUser />0 Followers
                </span>
              </div>
              <hr />
              <div className="mt-5 text-sm">
                <p className="">
                  <span className="font-bold">Subject: </span>Biology
                </p>
                <p className="">
                  <span className="font-bold">Total Classes: </span>78
                </p>
              </div>
            </div>
            
            <div className="w-full p-4 text-sm">
              <h3 className="text-xl font-bold underline underline-offset-4 pb-2">
                About Info:
              </h3>
              {/* <p className="">
              <span className="font-bold">Blood: </span>A-
            </p> */}
              <p className="">
                <span className="font-bold">Email: </span>
                {email}
              </p>
              <p className="">
                <span className="font-bold">Bio: </span>Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Delectus, tempore.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-t-0 py-5 flex justify-center items-center gap-5 text-xl text-white">
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
      </section>
    </>
  );
};

export default Profile;
