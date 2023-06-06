import schoolImg from "../../../src/assets/old-school.jpg";


const Banner = () => {
  return (
    <div>
      <img
        src={schoolImg}
        alt="old-school-banner-image"
        className="opacity-60 w-full h-[250px] md:h-[500px] lg:h-[700px] xl:h-[850px] object-cover"
      />
      <h2 className="-translate-y-80 font-bold text-white uppercase text-3xl text-start w-20">
        Old School
      </h2>
    </div>
  );
};

export default Banner;
