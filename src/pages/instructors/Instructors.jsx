import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import ButtonWide from '../../components/buttonWide/ButtonWide';
import PageTitle from '../../components/pageTitle/PageTitle';
import useAuth from '../../hooks/useAuth';

const Instructors = () => {
  const { user, logOut, setLoading } = useAuth();
  const navigate = useNavigate();

  const instructors = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' },
    { name: 'E' },
    { name: 'F' },
    { name: 'G' },
    { name: 'H' },
  ];

  const [displayedInstructors, setDisplayedInstructors] = useState(6);

  const handleDisplayedInstructors = () => {
    setDisplayedInstructors(instructors.length);
  };

  return (
    <section className="w-[80%] mx-auto">
      <Helmet>
        <title>oldschool | Instructors</title>
      </Helmet>

      <PageTitle heading={'Our Instructors'} subHeading={'most talented'} />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-50 mt-10">
       {
        instructors &&
        instructors.slice(0, displayedInstructors).map((instructor, index)=> <p key={index}>{instructor.name}</p>)
       }
      </div>
      <ButtonWide onClick={handleDisplayedInstructors}/>
    </section>
  );
};

export default Instructors;
