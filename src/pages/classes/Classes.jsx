import React from 'react';
import { Helmet } from 'react-helmet-async';
import ButtonWide from '../../components/buttonWide/ButtonWide';
import PageTitle from '../../components/pageTitle/PageTitle';
import ClassCard from './ClassCard';

const Classes = () => {
  return (
    <section className="w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto mb-20 md:mt-5">
      <Helmet>
        <title>oldschool | Classes</title>
      </Helmet>
      
      <PageTitle heading={'All classes'} subHeading={'our top prioritize'}/>

      <div className="space-y-20 mt-10">
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        
        <ButtonWide/>
      </div>
    </section>
  );
};

export default Classes;
