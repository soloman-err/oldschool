import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 py-10 lg:py-32 items-center px-5 md:px-0">
      <div className="text-center md:text-start md:w-3/4 mx-auto space-y-5">
        <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-star">
          <span className="">Oldschool</span> Where Learning Takes Flight
        </h2>
        <p>
          We are delighted to present a prestigious educational institution
          dedicated to fostering academic excellence and shaping the leaders of
          tomorrow.
        </p>

        <Link to={'/signup'}>
          <button className="btn btn-wide bg-gradient-to-l from-blue-900 to-blue-950 font-bold text-white rounded-sm">
            Enroll Today
          </button>
        </Link>
      </div>

      <div className="flex justify-center text-5xl lg:text-9xl py-5 md:px-40 rotate-90 md:rotate-45 lg:rotate-12 xl:rotate-0 mt-16">
        <span className="hero-clip bg-gradient-to-l from-blue-900 to-blue-950 -translate-x-">
          _
        </span>
        <span className="hero-clip bg-gradient-to-l from-blue-800 to-blue-900  -translate-x-3">
          _
        </span>
        <span className="hero-clip bg-gradient-to-l from-blue-700 to-blue-800  -translate-x-3">
          _
        </span>
      </div>
    </section>
  );
};

export default Hero;
