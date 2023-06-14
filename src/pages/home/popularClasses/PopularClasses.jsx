import React from 'react';
import useClasses from '../../../hooks/useClasses';
import LeftCard from './classCards/LeftCard';
import RightCard from './classCards/RightCard';

const PopularClasses = () => {
  const [classes] = useClasses();

  return (
    <section className="flex flex-col justify-between mt-20 w-[90%] mx-auto border- pr-2">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Pop<span className="border-b-4 border-zinc-900">ular Classes</span>
      </h1>
      <div className="space-y-6 md:space-y-20 mt-8">
        {classes &&
          classes.slice(0, 6).map((classItem, index) => {
            if (index % 2 === 0) {
              return <LeftCard key={index} classItem={classItem} />;
            } else {
              return (
                <div className="flex justify-end">
                  <RightCard classItem={classItem} />
                </div>
              );
            }
          })}
      </div>
    </section>
  );
};

export default PopularClasses;
