import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/pageTitle/PageTitle';
import useAuth from '../../hooks/useAuth';

const Contact = () => {
  const { user } = useAuth();

  return (
    <div className="">
      <Helmet>
        <title>oldschool | Contact</title>
      </Helmet>

     <PageTitle heading={'Contact us'} subHeading={'drop a query'}/>

      <div className="flex flex-col md:flex-row">
        <div className="hero">
          <img src="/contact.png" alt="contact-form-featured-image" className='w-32'/>
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 shadow-xl bg-white rounded">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered rounded input-sm"
                  />
                </div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  placeholder="Enter your message"
                  className="input input-bordered rounded"
                ></textarea>
                <div className="form-control mt-6">
                  <button className="btn btn-sm bg-zinc-900 btn-wide rounded text-white">
                    Send Query
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
