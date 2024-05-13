import placeholder from "../../assets/img/Banner/Background-2.webp";
const SkeletonBannerCategory = () => {
  return (
    <div className="relative animate-pulse">
      <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-gray-300 z-10"></div>
      <img className="w-full h-full" src={placeholder} />
      <div className="absolute text-4xl md:text-5xl lg:text-6xl font-semibold font-['Poppins'] left-[40px] md:left-[70px] lg:left-[75px] lg:top-[165px] md:top-[95px] top-[32px]">
        Placeholder
      </div>
    </div>
  );
};

export default SkeletonBannerCategory;
