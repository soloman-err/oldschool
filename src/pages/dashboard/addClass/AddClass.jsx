import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import PageTitle from '../../../components/pageTitle/PageTitle';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `http://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            instructor_name,
            instructor_email,
            subject_name,
            price,
            available_seats,
          } = data;

          const newClass = {
            iName: instructor_name,
            iEmail: instructor_email,
            subject: subject_name,
            image: imgURL,
            price: parseFloat(price),
            seats: available_seats,
          };
          console.log(newClass);

          // post new class to the database:
          axiosSecure.post('/classes', newClass).then((data) => {
            console.log('new class published:', data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class added successfully!',
                showConfirmButton: false,
                timer: 1000,
              });
            }
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>oldschool | Add-class</title>
      </Helmet>

      <PageTitle heading={'Add a class'} subHeading={'publish new'} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto border rounded mb-5 card-body"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            readOnly
            placeholder="Instructor name"
            className="input input-bordered rounded input-sm"
            {...register('instructor_name', { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            readOnly
            placeholder="Instructor email"
            className="input input-bordered rounded input-sm"
            {...register('instructor_email', { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Subject Name
              <span className="text-red-600"> *</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="subject name"
            className="input input-bordered rounded input-sm"
            {...register('subject_name', { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Class Image
              <span className="text-red-600"> *</span>
            </span>
          </label>
          <input
            type="file"
            className="file-input file-input-sm rounded input-bordered w-full"
            {...register('image', { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Class Fee
              <span className="text-red-600"> *</span>
            </span>
          </label>
          <input
            type="number"
            placeholder="$ 00.00"
            className="input input-bordered rounded input-sm"
            {...register('price', { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Available Seats
              <span className="text-red-600"> *</span>
            </span>
          </label>
          <input
            type="number"
            placeholder="0"
            className="input input-bordered rounded input-sm"
            {...register('available_seats', { required: true })}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-sm btn-wider bg-zinc-950 rounded btn-neutral">
            Publish
          </button>
        </div>
      </form>
    </>
  );
};

export default AddClass;
