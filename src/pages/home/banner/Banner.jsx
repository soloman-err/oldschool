import { Autoplay, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay";
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className="mt-2 md:mt-10 w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="md:h-[400px] lg:h-[800px]"
        autoplay={{ delay: 2500, disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <img className="h-full w-full object-center" src="/old-school.jpg" alt="" />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full object-center" src="/old-school.jpg" alt="" />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full object-center" src="/old-school.jpg" alt="" />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full object-center" src="/old-school.jpg" alt="" />{' '}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
