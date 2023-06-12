import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="footer p-5 md:p-10 lg:p-20 xl:px-40 text-white bg-zinc-950">
        <div>
          <span className="footer-title">About</span>
          <Link to={"contact"}><span className="link link-hover">Contact us</span></Link>
          <Link to={"about-us"}><span className="link link-hover">About us</span></Link>
          <Link to={"exams"}><span className="link link-hover">Exams</span></Link>
          <Link to={"address"}><span className="link link-hover">Address</span></Link>
        </div>
        
        <div>
          <span className="footer-title">Events</span>
          <Link to={"activities"}><span className="link link-hover">Activities</span></Link>
          <Link to={"awards"}><span className="link link-hover">Awards</span></Link>
          <Link to={"ceremony"}><span className="link link-hover">Ceremony</span></Link>
          <Link to={"farewell"}><span className="link link-hover">Farewell</span></Link>
        </div>
        
        <div>
          <span className="footer-title">Legal</span>
          <Link to={"join-oldschool"}><span className="link link-hover">Join us</span></Link>
          <Link to={"terms-of-use"}><span className="link link-hover">Terms of use</span></Link>
          <Link to={"privacy-policy"}><span className="link link-hover">Privacy policy</span></Link>
          <Link to={"cookie-policy"}><span className="link link-hover">Cookie policy</span></Link>
        </div>
        
        <div className="w-full">
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-[80%] md:w-full">
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
      <div className="footer-center p-4 bg-zinc-900 text-white">
        <span className="text-xs md:text-sm">
          Copyright © 2023 - All right reserved<Link to={'/'}> OLDSCHOOL</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
