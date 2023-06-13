import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ButtonWide from '../../components/buttonWide/ButtonWide';
import PageTitle from '../../components/pageTitle/PageTitle';
import useClasses from '../../hooks/useClasses';
import ClassCard from './ClassCard';

const Classes = () => {
  const [classes] = useClasses();
  // console.log(classes);

  const [displayedCards, setDisplayedCards] = useState(6);

  const handleDisplayCards = () => {
    console.log(classes.length);
    setDisplayedCards(classes.length);
  };

  return (
    <>
      <section className="w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto mb-40 md:mb-20 md:mt-5">
        <Helmet>
          <title>oldschool | All-classes</title>
        </Helmet>

        <PageTitle heading={'All classes'} subHeading={'our top prioritize'} />

        <div className="space-y-40 md:space-y-20 mt-10">
          {classes &&
            classes
              .slice(0, displayedCards)
              .map((singleClass) => (
                <ClassCard key={singleClass?._id} singleClass={singleClass} />
              ))}
        </div>
      </section>
      {/* conditional displaying0 of cards */}
      {displayedCards < classes.length && (
        <ButtonWide onClick={handleDisplayCards}/>
      )}
    </>
  );
};

export default Classes;
