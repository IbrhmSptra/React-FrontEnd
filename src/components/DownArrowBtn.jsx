import { FaCircleArrowDown } from "react-icons/fa6";
const DownArrowBtn = () => {
  return (
    <div className="flex justify-center flex-col items-center bottom-9 absolute gap-y-4">
      <p className="text-2xl font-semibold">Mulai Sekarang</p>
      <a href="#auth" className="animate-bouncing">
        <FaCircleArrowDown className="text-4xl" />
      </a>
    </div>
  );
};

export default DownArrowBtn;
