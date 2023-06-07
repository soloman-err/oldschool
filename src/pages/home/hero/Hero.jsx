const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 py-10 lg:py-32 items-center px-5 md:px-0 shadow-xl">
      <div className="text-center md:text-start md:w-3/4 mx-auto space-y-5">
        <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-star">
          <span className="bg-gradient-to-l from-blue-900 to-blue-950 bg-clip-tex text-transparen text-blac px-1 m-1">
            Oldschool
          </span>{' '}
          Where Learning Takes Flight
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit, asperiores fugit fugiat animi quia.
        </p>

        <button className="btn btn-wide bg-gradient-to-l from-blue-800 to-blue-950 font-bold">Enroll Today</button>
      </div>

      <div className='flex justify-center text-5xl lg:text-9xl py-5 md:px-40 animate-pulse rotate-90 md:rotate-45 lg:rotate-12 xl:rotate-0 mt-16'>
        <span className="hero-clip bg-gradient-to-l from-blue-900 to-blue-950 -translate-x-3">_</span>
        <span className="hero-clip bg-gradient-to-l from-blue-800 to-blue-900  -translate-x-3">_</span>
        <span className="hero-clip bg-gradient-to-l from-blue-700 to-blue-800  -translate-x-3">_</span>
      </div>
    </section>
  );
};

export default Hero;
