import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Instructors = () => {
  const { user, logOut, setLoading } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>oldschool | Instructors</title>
      </Helmet>
      instructors
    </div>
  );
};

export default Instructors;
