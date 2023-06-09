import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../login/SocialLogin';

const Signup = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // create a new user:
    try{
      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
  
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const savedUser = {
              name: data.name,
              email: data.email,
            };
  
            fetch(`http://localhost:2000/users`, {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data.data);
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate('/');
                }
              });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
    catch(error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>oldschool | register</title>
      </Helmet>
      <div className="flex justify-center items-center mt-24 md:mt-32 h-screen ">
        <div className="">
          <form
            className="w-full bg-white shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4 space-y-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-center text-slate-800 font-bold pb-5 text-lg">
              Please Register
            </h1>

            <div className="flex flex-col gap-2">
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
                    {...register('name', { required: true })}
                    placeholder="name"
                    className="input input-bordered input-sm rounded-md"
                    required
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
                    {...register('email', { required: true })}
                    placeholder="oldschool@gmail.com"
                    className="input input-bordered input-sm rounded-md"
                    required
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
                    {...register('password', { required: true })}
                    placeholder="password"
                    className="input input-bordered input-sm rounded-md"
                    required
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
                    name="confirmPassword"
                    {...register('confirmPassword', { required: true })}
                    placeholder="confirm password"
                    className="input input-bordered input-sm rounded-md"
                    required
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
                    type="url"
                    name="photoURL"
                    {...register('photoURL', { required: true })}
                    placeholder="http://image.jpg"
                    className="input input-bordered input-sm rounded-md"
                    required
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
                    {...register('phone')}
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
                    {...register('address')}
                    placeholder="address"
                    className="input input-bordered input-sm rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="text-center pt-5">
              <button
                className="btn btn-sm btn-wide font-bold bg-blue-500 text-white"
                type="submit"
              >
                Register
              </button>
            </div>

            <div className="flex flex-col text-start items-center py-1">
              <span className="label-text-alt">
                Already have an account?
                <Link to={'/login'} className="text-blue-800">
                  Login
                </Link>
              </span>
            </div>

            <SocialLogin />
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
