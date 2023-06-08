import { Swiper, SwiperSlide } from 'swiper/react';
import schoolImgI from '/old-school-i.jpg';
import schoolImgII from '/old-school-ii.jpg';
import schoolImgIII from '/old-school-iii.jpg';
import schoolImgIV from '/old-school-iv.jpg';
import schoolImgV from '/old-school-v.jpg';
import schoolImgVI from '/old-school-vi.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper';

const Banner = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img
            src={schoolImgI}
            alt="shool-image-banner"
            className="w-full h-[200px] md:h-[400px] lg:h-[500px] xl:h-[700px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={schoolImgII}
            alt="shool-image-banner"
            className="w-full h-[200px] md:h-[400px] lg:h-[500px] xl:h-[700px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={schoolImgIII}
            alt="shool-image-banner"
            className="w-full h-[200px] md:h-[400px] lg:h-[500px] xl:h-[700px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={schoolImgIV}
            alt="shool-image-banner"
            className="w-full h-[200px] md:h-[400px] lg:h-[500px] xl:h-[700px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={schoolImgV}
            alt="shool-image-banner"
            className="w-full h-[200px] md:h-[400px] lg:h-[500px] xl:h-[700px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={schoolImgVI}
            alt="shool-image-banner"
            className="w-full h-[200px] md:h-[400px] lg:h-[500px] xl:h-[700px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
