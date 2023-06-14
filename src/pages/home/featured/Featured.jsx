import React from 'react';

const Featured = () => {
  return (
    <section className="w-full flex flex-col md:flex-row justify-between gap-5 items-center mx-auto bg-slate-950 space-y-2 md:space-y-0 mt-20 py-10 lg:py-20 xl:py-40 px-5 md:px-20">
      <div className="flex flex-col md:w-[80%] md:flex-row text-white">
        <div className="w-full md:order-2 text-start space-y-2">
          <h1 className="text-4xl">NEWS & UPDATES</h1>

          <div className="border-l-4 pl-2 border-red-600">
            <p>
              OldSchool Edu prides itself on employing innovative technologies
              and modern teaching methodologies to enhance the learning
              experience.
            </p>
            <p>
              Together, let us build a solid foundation for success, empower
              young minds, and inspire a lifelong love for learning.
            </p>
          </div>
          <button className="btn btn-wide rounded-none btn-sm">
            Watch more
          </button>
        </div>
      </div>
      <div className="w-full order-1 bg-slate-950 h-[200px] md:h-[300px]">
        <video className="w-full h-full" controls>
          <source
            src="/bedford-sch-vid.mp4"
            className="w-full"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default Featured;
