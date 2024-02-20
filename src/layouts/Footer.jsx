import appstore from "../assets/img/appstore.png";
import playstore from "../assets/img/playstore.png";
import logo from "../assets/img/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="grid grid-cols-1 px-4 py-2 gap-y-4 bg-primary sm:px-8 sm:py-4 md:px-12 md:items-center md:grid-cols-3 xl:px-40 xl:py-6 xl:grid-cols-3 xl:gap-y-0">
      <div className=" grid grid-cols-2 col-span-2 gap-x-4 gap-y-2 xl:gap-x-8 xl:gap-y-4">
        <div>
          <h4 className="font-bold">Perusahaan</h4>
          <p className="text-xs text-grayText mt-1 md:text-sm">
            Jl. Gatot Subroto No.Kav.88, RT.1/RW.9, Kuningan Bar., Kec. Mampang
            Prpt., Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 12899
          </p>
        </div>
        <div>
          <h4 className="font-bold">Tentang Foodo</h4>
          <p className="mt-1 text-xs text-grayText md:text-sm">
            Foodo adalah sebuah aplikasi resep makanan dengan fitur pesan bahan
            yang akan di antarkan ke alamat anda
          </p>
        </div>
        <div>
          <h4 className="font-bold">Ikuti Kami</h4>
          <div className="flex gap-2 mt-1 items-center">
            <FaFacebook className="text-2xl" />
            <LuInstagram className="text-2xl" />
            <BsTwitterX className="text-2xl" />
          </div>
        </div>
        <div>
          <h4 className="font-bold">Costumer Service</h4>
          <div className="flex gap-2 mt-1">
            <TfiEmail className="text-2xl" />
            <p className="text-xs text-grayText md:text-sm">cs@foodo.com</p>
          </div>
          <div className="flex items-center gap-2 xl:mt-1">
            <BsTelephone className="text-2xl" />
            <p className="text-xs text-grayText md:text-sm">(021) 12098734</p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="max-w-[150px] m-auto sm:max-w-[200px]"
          src={logo}
          alt="logo"
        />
        <div className="flex justify-center mt-6 gap-2">
          <img className="h-7" src={playstore} alt="playstore" />
          <img className="h-7" src={appstore} alt="appstore" />
        </div>
        <p className="text-grayText text-center mt-4 text-sm md:text-base xl:mt-8">
          © 2022 - 2024, PT. Foodo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
