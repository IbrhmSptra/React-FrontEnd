import CardFood from "../components/CardFood";
import frenchtoast from "../assets/img/Food/frenchtoast.png";
import rendang from "../assets/img/Food/rendang.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import ArrowButton from "../components/ArrowButton";

const Trending = () => {
  return (
    <div className="mt-8">
      <h1 className="font-medium text-lg xl:text-xl">Trending</h1>
      <div className="mt-2 relative">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={20}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          <ArrowButton direction="left" />
          <SwiperSlide>
            <CardFood src={frenchtoast} nama="French Toast" />
          </SwiperSlide>
          <SwiperSlide>
            <CardFood src={rendang} nama="Rendang" />
          </SwiperSlide>
          <SwiperSlide>
            <CardFood src={frenchtoast} nama="French Toast" />
          </SwiperSlide>
          <SwiperSlide>
            <CardFood src={rendang} nama="Rendang" />
          </SwiperSlide>
          <SwiperSlide>
            <CardFood src={frenchtoast} nama="French Toast" />
          </SwiperSlide>
          <SwiperSlide>
            <CardFood src={rendang} nama="Rendang" />
          </SwiperSlide>
          <SwiperSlide>
            <CardFood src={frenchtoast} nama="French Toast" />
          </SwiperSlide>
          <SwiperSlide>
            <CardFood src={rendang} nama="Rendang" />
          </SwiperSlide>
          <ArrowButton direction="right" />
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
