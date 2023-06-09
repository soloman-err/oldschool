import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signIn, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: 'Logged in successfully!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        navigate(from, { replace: true });
      })
      .then((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <div className="flex justify-center items-center mt-20 md:mt-32 lg:mt-40">
      <div className="">
        <form
          className="w-3/3 bg-white shadow-2xl rounded-xl px-8 pt-5 pb-8 mb-4 space-y-2"
          onSubmit={handleLogin}
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
            <Link to={'/signup'} className="text-blue-800">
              {' '}
              Sign up
            </Link>
          </span>

          <div className="">
            <span className="divider">or</span>
            <div className="flex flex-row gap-2 justify-center items-center">
              <button className="flex gap-2 border p-1 rounded w-full shadow-sm">
                <img src="/google-icon.png" alt="login-icon" className="w-6" />
                Google
              </button>
              <button className="flex items-center gap-2 border p-1 rounded w-full shadow-sm">
                <img src="/github-icon.png" alt="login-icon" className="w-6" />
                Github
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
