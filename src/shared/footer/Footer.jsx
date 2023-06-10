import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer p-5 md:p-10 lg:p-20 xl:px-40 text-white bg-slate-950">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div className='w-full'>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-full">
            <label className="label">
              <span className="">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="oldschool@gmail.com"
                className="input input-bordered text-black w-full rounded-none input-sm"
              />
              <button className="btn btn-neutral btn-sm rounded-sm absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-center p-4 bg-slate-900 text-white">
        <span className='text-sm'>Copyright © 2023 - All right reserved<Link to={"/"}> OLDSCHOOL</Link></span>
      </div>
    </footer>
  );
};

export default Footer;
