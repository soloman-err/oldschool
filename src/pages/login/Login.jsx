import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // email-password sign in:
    try {
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Welcome to Oldschool',
            text: 'logged in successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        })
        .then((error) => {
          console.log('Error:', error);
        });
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>oldschool | Login</title>
      </Helmet>
      <div className="flex justify-center items-center mt-5">
        <div className="bg-white shadow-2xl rounded-xl px-8 pt-5 pb-8 mb-4 space-y-2 border">
          <form className="w-3/3" onSubmit={handleLogin}>
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
                className="input input-bordered input-sm rounded"
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
                className="input input-bordered input-sm rounded"
              />
            </div>

            <div className="text-center pt-5">
              <button
                className="btn btn-sm btn-wide font-bold bg-zinc-800 text-white rounded"
                type="submit"
              >
                Sign In
              </button>
            </div>

            <span className="label-text-alt">
              Don't have an account?
              <Link to={'/signup'} className="text-blue-800">
                {' '}
                Sign up
              </Link>
            </span>
          </form>
          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
