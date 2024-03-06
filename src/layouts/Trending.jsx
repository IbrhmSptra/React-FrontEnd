import CardFood from "../components/CardFood";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import ArrowButton from "../components/ArrowButton";
import { useEffect, useState } from "react";
import { getTrending } from "../services/supabase.service";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getTrending((data) => {
      setTrending(data);
    });
  }, []);
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
          {trending.map((value, i) => (
            <SwiperSlide key={i}>
              <CardFood data={value} />
            </SwiperSlide>
          ))}
          <ArrowButton direction="right" />
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
