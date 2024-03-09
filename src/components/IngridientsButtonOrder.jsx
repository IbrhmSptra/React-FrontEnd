import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const IngridientsButtonOrder = ({ id }) => {
  return (
    <div className="mb-8 w-1/2 rounded-lg mt-4 sm:mx-auto bg-primary">
      <Link
        to={`/detailpemesanan/${id}`}
        className="w-full flex py-2 justify-evenly  items-center"
      >
        <IoCartOutline size={30} />
        <p className="font-bold">Pesan Bahan</p>
      </Link>
    </div>
  );
};

export default IngridientsButtonOrder;
