import React from 'react';
import { Helmet } from 'react-helmet-async';
import ButtonWide from '../../../components/buttonWide/ButtonWide';
import PageTitle from '../../../components/pageTitle/PageTitle';
import MyClassesCard from './MyClassesCard';

const MyClasses = () => {
  return (
    <div>
      <Helmet>
        <title>oldschool | My-classes</title>
      </Helmet>

      <PageTitle heading={'My classes'} subHeading={'treasure'}/>

      <div className="grid md:grid-cols-3 gap-x-10 gap-y-20 mt-10 mb-20 px-10 md:px-0">
        <MyClassesCard />
        <MyClassesCard />
        <MyClassesCard />
        <MyClassesCard />
        <MyClassesCard />
        <MyClassesCard />
      </div>
        <ButtonWide />
    </div>
  );
};

export default MyClasses;
