import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form
    setEmail('');
    setPassword('');
  };
  return (
    <div className="flex justify-center items-center py-10 md:py-32 md:h-scree">
      <div className="">
        <form
          className="w-full bg-white shadow-2xl rounded-xl p-4 space-y-1"
          //   onSubmit={handleSubmit}
        >
          <h1 className="text-center text-slate-800 font-bold pb-5 text-lg">
            Please Register
          </h1>

          <div className="flex flex-col md:flex-row gap-1 md:gap-2">
            {/* Form-col-1 */}
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-alt">
                    Name
                    <span className="text-red-600"> *</span>
                  </span>
                </label>

                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered input-sm rounded-md"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text-alt">
                    Email
                    <span className="text-red-600"> *</span>
                  </span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="oldschool@gmail.com"
                  className="input input-bordered input-sm rounded-md"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text-alt">
                    Password
                    <span className="text-red-600"> *</span>
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered input-sm rounded-md"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text-alt">
                    Confirm Password
                    <span className="text-red-600"> *</span>
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="confirm password"
                  className="input input-bordered input-sm rounded-md"
                />
              </div>
            </div>

            {/* Form-col-2 */}
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-alt">
                    Photo URL
                    <span className="text-red-600"> *</span>
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="http://image.jpg"
                  className="input input-bordered input-sm rounded-md"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-alt">Gender</span>
                </label>
                <select className="input input-bordered input-sm rounded-md">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-alt">Phone</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="+012-345-6789"
                  className="input input-bordered input-sm rounded-md"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-alt">Address</span>
                </label>
                <input
                  type="text"
                  name="text"
                  placeholder="address"
                  className="input input-bordered input-sm rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="text-center pt-5">
            <button
              className="btn btn-sm w-full font-bold bg-blue-500 text-white"
              type="submit"
            >
              Register
            </button>
          </div>

          <div className="flex flex-col text-start items-center py-1">
            <span className="label-text-alt">
              Already have an account?
              <Link to={'/login'} className="text-blue-800">
                {' '}
                Login
              </Link>
            </span>
            {/* <span className="label-text-alt pt-1 text-blue-700">
              <Link>Forgot password?</Link>
            </span> */}
          </div>

          <div className="">
            <span className="divider">or</span>
            <div className="flex flex-row gap-5 justify-center">
              <button>
                <img src="/google-icon.png" alt="login-icon" className="w-6" />
              </button>
              <button>
                <img src="/github-icon.png" alt="login-icon" className="w-7" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
