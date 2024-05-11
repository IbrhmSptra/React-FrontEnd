/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const KategoriCard = ({ img, kategori, link }) => {
  return (
    <div className="border shadow-xl sm:w-1/4 ">
      <Link
        draggable="false"
        className="h-full w-full sm:p-2 sm:flex sm:flex-col sm:items-center"
        to={link}
      >
        <img
          draggable="false"
          className="max-h-32 w-full object-cover sm:max-h-fit sm:w-20 sm:h-20 sm:rounded-full lg:w-24 lg:h-24 xl:w-28 xl:h-28"
          src={img}
          alt="Img thumbnail"
        />
        <p className="text-center mt-2 mb-2 text-sm">{kategori}</p>
      </Link>
    </div>
  );
};

export default KategoriCard;
