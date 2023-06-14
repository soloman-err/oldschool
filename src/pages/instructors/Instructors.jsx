import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import { useNavigate } from 'react-router-dom';
import ButtonWide from '../../components/buttonWide/ButtonWide';
import PageTitle from '../../components/pageTitle/PageTitle';
// import useAuth from '../../hooks/useAuth';
import useInstructors from '../../hooks/useInstructors';
import InstructorCard from '../../shared/instructors/InstructorCard';

const Instructors = () => {
  // const { user, logOut, setLoading } = useAuth();
  // const navigate = useNavigate();
  const instructors = useInstructors();

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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-50 mt-10 mb-2">
        {instructors &&
          instructors.map((instructor, index) => (
            <InstructorCard key={index} instructor={instructor} />
          ))}
      </div>

      <ButtonWide onClick={handleDisplayedInstructors} />
    </section>
  );
};

export default Instructors;
