import { FaMapMarkerAlt } from "react-icons/fa";

const SearchDetailPemesanan = () => {
  return (
    <div className="relative">
      <input
        className="w-full border border-primary text-grayText text-sm py-2 pl-14 pr-6 rounded-xl font-poppins focus:outline-none"
        type="text"
        placeholder="Masukan Alamat"
      />
      <FaMapMarkerAlt className="absolute top-1/2 left-4 -translate-y-1/2" />
    </div>
  );
};

export default SearchDetailPemesanan;
