import schoolImg from "../../../src/assets/old-school.jpg";


const Banner = () => {
  return (
    <div className="">
      <img
        src={schoolImg}
        alt="old-school-banner-image"
        className="opacity-60 w-full h-[250px] md:h-[500px] lg:h-[700px] xl:h-[850px] object-cover relative"
      />
     
      {/* <CustomBadge/> */}
    </div>
  );
};

export default Banner;
