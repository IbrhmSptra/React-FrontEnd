import banner from "../assets/img/Banner/Background-2.webp";

const Banner = () => {
  return (
    <div className="relative">
      <img className="w-full h-full bg-primary" src={banner} />
      <div className="absolute text-black text-4xl md:text-5xl lg:text-6xl font-semibold font-['Poppins'] left-[40px] md:left-[70px] lg:left-[75px] lg:top-[165px] md:top-[95px] top-[32px]">
        Favorite
      </div>
    </div>
  );
};

export default Banner;
