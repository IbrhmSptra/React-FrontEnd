import { Link } from "react-router-dom";
import FeatureRating from "../Input/FeatureRating";

const CardRiwayat = ({ data }) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date(data.date);

  let formattedDate = date.toLocaleDateString("id-ID", options);
  return (
    <Link
      to={`/detailtransaksi/${data.id}`}
      className="flex border shadow-xl rounded-xl overflow-hidden"
    >
      <img
        className="w-1/2 min-w-44 max-h-36 object-cover"
        src={data.image}
        alt="img-thumbnail"
      />
      <div className="py-4 px-2 flex flex-col justify-around">
        <div className="space-y-1">
          <h1 className="line-clamp-1">{data.name}</h1>
          <p className="text-xs text-grayText font-light">{formattedDate}</p>
          <p className="font-semibold text-tertiary text-sm">
            Rp
            {data.price.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </p>
        </div>

        <div className="flex">
          <p className="text-xs text-grayText translate-y-0.5 mr-1">Ulas :</p>
          <FeatureRating />
        </div>
      </div>
    </Link>
  );
};

export default CardRiwayat;
