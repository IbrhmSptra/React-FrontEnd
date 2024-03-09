import { CiStar } from "react-icons/ci";
import placeholder from "../assets/img/crroisant.jpg";

const CardRiwayat = () => {
  return (
    <div className="flex border shadow-xl rounded-xl overflow-hidden">
      <img
        className="w-1/2 min-w-44 max-h-36 object-cover"
        src={placeholder}
        alt="img-thumbnail"
      />
      <div className="py-4 px-2 flex flex-col justify-around">
        <div className="space-y-1">
          <h1 className="line-clamp-1">Fish And Chips</h1>
          <p className="text-xs text-grayText font-light">14 Januari 2024</p>
          <p className="font-semibold text-tertiary text-sm">Rp50.000</p>
        </div>

        <div className="flex items-center">
          <p className="text-xs text-grayText">Ulas :</p>
          <CiStar size={15} />
          <CiStar size={15} />
          <CiStar size={15} />
          <CiStar size={15} />
          <CiStar size={15} />
        </div>
      </div>
    </div>
  );
};

export default CardRiwayat;
