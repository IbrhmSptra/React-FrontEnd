import iklan1 from "../assets/img/Promo/iklan-1.png";
import iklan2 from "../assets/img/Promo/iklan-2.png";
import iklan3 from "../assets/img/Promo/iklan-3.png";
import iklan4 from "../assets/img/Promo/iklan-4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import useWindowDimensions from "../hooks/useWindowSize";

function Carousel() {
  const { width } = useWindowDimensions();

  return (
    <>
      <Swiper
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectCoverflow]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          scale: 0.9,
          depth: 200,
        }}
        slidesPerView={width >= 640 ? 2 : 1}
        effect={width >= 640 ? "coverflow" : "slide"}
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        <SwiperSlide>
          <img src={iklan1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={iklan2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={iklan3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={iklan4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
