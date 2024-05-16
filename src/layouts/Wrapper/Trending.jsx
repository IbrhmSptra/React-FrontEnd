import CardFood from "../../components/Card/CardFood";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import ArrowButton from "../../components/Button/ArrowButton";
import useSWR from "swr";
import SkeletonTrending from "../Skeleton/SkeletonTrending";
import { fetchGet } from "../../services/axios.service";

const Trending = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { data, error, isLoading } = useSWR(
    `${API_URL}/api/food/random?limit=10`,
    fetchGet,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );
  if (error) {
    console.error("Fetch Error :", error?.response.data.message);
  }

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
          {isLoading ? (
            <SkeletonTrending />
          ) : (
            data.data.map((value, i) => (
              <SwiperSlide key={i}>
                <CardFood data={value} />
              </SwiperSlide>
            ))
          )}
          <ArrowButton direction="right" />
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
