import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users');
    console.log(res.data);
    return res.data;
  });

  //   make admin:

  return (
    <div>
      <Helmet>oldschool | All_users</Helmet>
      <h3>{users.length}</h3>

    {
        users.map((user)=> <div
        key={user._id}
        >
            <p>{user?.name}</p>
            <p>{user?.email}</p>
        </div>)
    }
    </div>
  );
};

export default AllUsers;
