import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/classes');
    return res.data;
  });
  console.log(classes);

  // Delete a class:
  const handleDelete = (cls) => {
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
        axiosSecure.delete(`/classes/${cls._id}`).then((res) => {
          console.log('deleted response', res?.data);

          refetch();
          if (res.data?.deletedCount > 0) {
            Swal.fire('Deleted!', 'A Class has been deleted.', 'success');
          }
        });
      }
    });
  };

  return (
    <div className="">
      <Helmet>
        <title>oldschool | All-classes</title>
      </Helmet>
      <div className="overflow-x-auto w-full rounded">
        <table className="table table-zebra border my-2">
          {/* head */}
          <thead className="bg-zinc-200">
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Subject</th>
              <th>Instructor</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {classes &&
              classes.map((cls, index) => (
                <tr key={cls._id}>
                  <th className="border">{index + 1}</th>
                  <td className="border">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-20 h-12">
                          <img
                            src={cls?.image}
                            alt="class-thumbnail"
                            className="object-cover w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="border">
                    <div>
                      <div className="font-bold">{cls?.subject}</div>
                    </div>
                  </td>

                  <td className="border">
                    <span className="font-bol">{cls?.iName}</span>
                    <br />
                    <span className="badge badge-sm badge-ghost">
                      {cls?.iEmail}
                    </span>
                  </td>

                  <td className="border">
                    <span className="font-bold">${cls?.price}</span>
                  </td>

                  <th className="border text-center">
                    <button
                      onClick={() => handleDelete(cls)}
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
    </div>
  );
};

export default AllClasses;
