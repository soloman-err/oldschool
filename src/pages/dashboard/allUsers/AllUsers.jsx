import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import ButtonWide from '../../../components/buttonWide/ButtonWide';
import PageTitle from '../../../components/pageTitle/PageTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users');
    console.log(res.data);
    return res.data;
  });

  // users:
  // const users = [
  //   { name: 'John', email: 'john@gmail.com' },
  //   { name: 'Mariana', email: 'mariana@gmail.com' },
  //   { name: 'Ëma', email: 'éma@gmail.com' },
  //   { name: 'Celia', email: 'celia@gmail.com' },
  //   { name: 'James', email: 'james@gmail.com' },
  //   { name: 'Ralf', email: 'ralf@gmail.com' },
  //   { name: 'Zach', email: 'zach@gmail.com' },
  //   { name: 'Martin', email: 'martin@gmail.com' },
  //   { name: 'Jack', email: 'jack@gmail.com' },
  //   { name: 'Solo', email: 'solo@gmail.com' },
  // ];

  return (
    <div>
      <Helmet>
        <title>oldschool | All users</title>
      </Helmet>

      <PageTitle heading={'All users'} subHeading={'members of oldschool'}/>

      <div className='pl-2'>
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
              <th>Role</th>
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
                  <td>
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm btn-ghost rounded bg-transparent"
                    >
                      {user?.role === 'admin' ? 'Admin' : <FaUserShield />}
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
