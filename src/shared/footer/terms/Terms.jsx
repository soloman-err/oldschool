import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHSquare, FaIcicles, FaMagento, FaNeos, FaNs8, FaQuoteLeft, FaQuoteRight, FaRProject, FaSatellite } from 'react-icons/fa';

const Terms = () => {
  return (
    <section className="mt-5">
      <Helmet><title>oldschool | Terms-of-use</title></Helmet>
      <div className="w-[350px] mx-auto text-center">
        <h3 className="relative text-lg pb-2 items-center underline underline-offset-4">
          <FaQuoteLeft className='absolute left-24'/>
          <FaQuoteRight className='absolute left-60'/>
          Terms of use
        </h3>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem, ipsum.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          dolor facilis. Voluptas accusamus.
        </p>
        <p>Lorem, ipsum.</p>
        <hr className="my-3" />
        <p className="text-lg">Estesqutoe</p>
        <p>Lorem, ipsum dolor.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias
          tempora quod suscipit reiciendis dignissimos minima repellendus eum
          modi nemo dolorum quos enim nihil vel ipsa adipisci facere molestias
          minus nesciunt? Laborum ex sint fuga cupiditate perspiciatis
          molestiae. Ullam reprehenderit recusandae magnam praesentium alias
          laborum minus temporibus, velit fugit corporis!
        </p>
        <hr className="my-3" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo
          eius, recusandae sunt expedita quia magnam dicta beatae blanditiis
          fugiat?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, sed?</p>

        <div className="flex justify-center text-xl mt-5 text-center gap-2">
            <FaMagento/>
            <FaRProject/>
            <FaIcicles/>
            <FaNeos/>
            <FaNs8/>
            <FaHSquare/>
            <FaSatellite/>
        </div>
      </div>
    </section>
  );
};

export default Terms;
