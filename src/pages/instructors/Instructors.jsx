import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import ButtonWide from '../../components/buttonWide/ButtonWide';
import PageTitle from '../../components/pageTitle/PageTitle';
import useAuth from '../../hooks/useAuth';
import InstructorCard from '../../shared/instructors/InstructorCard';

const Instructors = () => {
  const { user, logOut, setLoading } = useAuth();
  const navigate = useNavigate();

  const users = [{ name: 'mr.A' }];

  return (
    <section className='w-[80%] mx-auto'>
      <Helmet>
        <title>oldschool | Instructors</title>
      </Helmet>

      <PageTitle heading={'Our Instructors'} subHeading={'most talented'}/>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-50 mt-10">
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
      </div>
        <ButtonWide/>
    </section>
  );
};

export default Instructors;
