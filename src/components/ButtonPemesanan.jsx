import { GoPackageDependents } from "react-icons/go";

const ButtonPemesanan = () => {
  return (
    <div className="bg-primary w-full flex py-2 justify-evenly items-center max-w-48 font-poppins rounded-xl">
      <p>Pesan Bahan</p>
      <GoPackageDependents size={20} />
    </div>
  );
};

export default ButtonPemesanan;
