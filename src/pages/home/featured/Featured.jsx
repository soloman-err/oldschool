import React from 'react';

const Featured = () => {
  return (
    <section className="w-[90%] flex flex-col md:flex-row justify-between gap-5 items-center mx-auto bg-slate-950 space-y-2 md:space-y-0 mt-20 pt-10 px-5 md:px-20">
      <div className="flex flex-col md:w-[80%] md:flex-row text-white">
        <div className="w-full md:order-2 text-start space-y-2">
          <h1 className="text-4xl">Featured</h1>

          <div className="border-l-4 pl-2 border-red-600">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              quae quidem fugiat est iste necessitatibus.
            </p>
            <p>
              exercitationem obcaecati repellendus atque dolor fuga velit
              asperiores libero
            </p>
          </div>
        </div>
      </div>
      <div className="w-full order-1 bg-slate-950 h-[200px]">
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
