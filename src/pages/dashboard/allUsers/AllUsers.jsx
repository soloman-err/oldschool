import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import ButtonWide from '../../../components/buttonWide/ButtonWide';
import PageTitle from '../../../components/pageTitle/PageTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
  // const [selectedRole, setSelectedRole] = useState('');
  // const [showSelect, setShowSelect] = useState(false);
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users');
    return res.data;
  });

  // Make an admin:
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `${user?.name} will be an admin!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, make admin',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin/${user?._id}`)
          .then((res) => {
            refetch();
            if (res.data?.modifiedCount > 0) {
              Swal.fire(
                'Success!',
                `${user?.name} has been made an admin.`,
                'success'
              );
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire(
              'Error!',
              'An error occurred while making the user an admin.',
              'error'
            );
          });
      }
    });

    // setShowSelect(true);

    // if (selectedRole) {
    //   setSelectedRole('');
    //   setShowSelect(false);
    // }
  };

  // Make an Instructor:
  const handleMakeInstructor = (user) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `${user?.name} will be an Instructor!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, make Instructor',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/instructor/${user?._id}`)
          .then((res) => {
            refetch();
            if (res.data?.modifiedCount > 0) {
              Swal.fire(
                'Success!',
                `${user?.name} has been made an Instructor!.`,
                'success'
              );
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire(
              'Error!',
              'An error occurred while making the user an admin.',
              'error'
            );
          });
      }
    });
  };

  // Delete an user:s
  const handleDelete = (user) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log('deleted response', res?.data);

          refetch();
          if (res.data?.deletedCount > 0) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          }
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>oldschool | All users</title>
      </Helmet>

      <PageTitle heading={'All users'} subHeading={'Members of oldschool'} />

      <div className="pl-2">
        <h3 className="badge font-bold bg-zinc-700 text-white">
          Total user: {users.length}
        </h3>
      </div>

      <div className="overflow-x-auto w-full border rounded mt-2 bg-zinc-50">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-zinc-200">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users?.map((user, index) => (
                <tr key={index}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="opacity-90">{user?.email}</td>

                  <td className="flex flex-row gap-2">
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm text-xs capitalize border-none"
                      disabled={user?.role === 'admin' && true}
                    >
                      {user?.role === 'admin' ? 'Admin' : 'Make Admin'}
                    </button>

                    <>
                      {/* {showSelect ? (
                      <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                      >
                        <option value="">Set Role</option>
                        <option value="admin">Admin</option>
                        <option value="instructor">Instructor</option>
                        <option value="user">User</option>
                      </select>
                    ) : (
                      <>{user?.role}</>
                    )} */}
                    </>
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-sm text-xs capitalize border-none"
                      disabled={user?.role === 'instructor' && true}
                    >
                      {user?.role === 'instructor'
                        ? 'Instructor'
                        : 'Make Instructor'}
                    </button>
                  </td>

                  <th>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-sm btn-ghost rounded bg-transparent"
                    >
                      <FaTrashAlt className="text-red-500" />
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <ButtonWide />
    </div>
  );
};

export default AllUsers;
{
  /* {users &&
              users?.map((user, index) => (
                <tr key={index}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user?.email}
                    <br />
                  </td>
                  <td>
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm bg-sky-100 btn-ghost"
                    >
                      {user?.role === 'admin' ? 'Admin' : <FaUserShield />}
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-sm btn-ghost bg-red-100"
                    >
                      <FaTrashAlt className="text-red-500" />
                    </button>
                  </th>
                </tr>
              ))} */
}
