import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const SocialLogin = () => {
  const [axiosSecure] = useAxiosSecure();
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  // google sign in:
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log({ loggedUser });

        const savedUser = {
          name: loggedUser?.displayName,
          email: loggedUser?.email,
        };
        console.log(savedUser);

        // post users to to database:
        axiosSecure.post('/users', savedUser)
          .then(() => {
            navigate(from, { replace: true });
          });

        // confirmation:
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
      .then((err) => {
        console.log('Error:', err);
      });
  };

  return (
    <>
      <span className="divider">or</span>
      <div className="flex flex-row gap-2 justify-center items-center">
        <button
          onClick={handleGoogleSignIn}
          className="flex gap-2 border p-1 rounded w-full shadow-sm"
        >
          <img src="/google-icon.png" alt="login-icon" className="w-6" />
          Google
        </button>
        <button
          //   onClick={handleGithubSignIn}
          className="flex items-center gap-2 border p-1 rounded w-full shadow-sm"
        >
          <img src="/github-icon.png" alt="login-icon" className="w-6" />
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
