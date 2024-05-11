import LocationInput from "../components/Input/LocationInput";
import OrderList from "../components/OrderList";
import RingkasanTransaksi from "../components/RingkasanTransaksi";
import ButtonPemesanan from "../components/Button/ButtonPemesanan";

const DetailPemesanan = ({ data }) => {
  return (
    <>
      <div className="relative mb-20">
        <p className="font-semibold text-3xl">Pengiriman</p>
        <div className="space-y-4 md:space-y-0 md:flex space-between gap-x-10 mt-6">
          <div className="w-full space-y-4">
            <LocationInput />
            <div className="bg-white shadow-xl border rounded-xl py-4 px-6">
              <OrderList data={data.recipe} />
            </div>
          </div>
          <div className="w-full bg-white shadow-xl border rounded-xl py-4 px-6 space-y-14 relative">
            <RingkasanTransaksi data={data} />
            <div className="flex justify-center w-ful">
              <ButtonPemesanan data={data} />
            </div>
            <div className="flex justify-center">
              <p className="text-center text-xs text-grayText md:text-sm absolute bottom-6 font-light max-w-96">
                Dengan melanjutkan, kamu menyetujui S&K pemesanan bahan resep
                aplikasi Foodo
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPemesanan;
