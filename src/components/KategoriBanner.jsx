const Banner = ({ src, addClass, textColor, text }) => {
  return (
    <div className="relative">
      <img className={`w-full h-full ${addClass}`} src={src} />
      <div
        className={`absolute  text-4xl md:text-5xl lg:text-6xl font-semibold font-['Poppins'] left-[40px] md:left-[70px] lg:left-[75px] lg:top-[165px] md:top-[95px] top-[32px] ${textColor}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Banner;
