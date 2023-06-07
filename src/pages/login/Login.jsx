import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <form
          className="w-3/3 bg-white shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4 space-y-2"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-slate-800 font-bold pb-10 text-xl">
            Please login
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text-alt">Email</span>
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
              <span className="label-text-alt">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered input-sm rounded-md"
            />
            {/* <span className="label-text-alt pt-1 text-blue-700 ">
              <Link>Forgot password?</Link>
            </span> */}
          </div>

          <div className="text-center pt-5">
            <button
              className="btn btn-sm btn-wide font-bold bg-blue-500 text-white"
              type="submit"
            >
              Sign In
            </button>
          </div>

          <span className="label-text-alt">
            Don't have an account?
            <Link to={'/signup'}
            className="text-blue-800"
            > Sign up</Link>
          </span>

          <div className="pt-3">
            <span className="divider">or</span>
            <div className="flex flex-row gap-5 justify-center pt-1">
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

export default Login;
