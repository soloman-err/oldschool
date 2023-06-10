import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>oldschool | profile</title>
      </Helmet>
      <section className="w-[80%] mx-auto">
        <div className="flex">
          <div className="bg-zinc-200 w-1/2 p-5">
            <div className="text-center w-[90%] mx-auto">
              <img
                src="/user-demo.png"
                alt="user-profile-image"
                className="w-40 h-40 mx-auto"
              />
              <h2 className="text-xl">Username</h2>
            </div>
            <div>
              <h3 className="text-xl font-bold">About Me</h3>
              <p className="text-slate-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi illum veritatis illo voluptatem omnis iusto veniam modi
                possimus hic placeat ratione doloribus repellendus, nulla ullam
                eius porro deleniti quas deserunt?
              </p>
            </div>
          </div>
          <div className="bg-zinc-400 w-1/2"></div>
        </div>
        <div className="bg-indigo-950 h-20 flex justify-center items-center gap-5 text-3xl text-white">
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
