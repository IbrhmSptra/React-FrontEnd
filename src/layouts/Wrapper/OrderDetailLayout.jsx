import useSWR from "swr";
import OrderDetail from "../Content/OrderDetail";
import OrderList from "../Content/OrderList";
import { fetchGet } from "../../services/axios.service";
import SkeletonRecipe from "../Skeleton/SkeletonRecipePage";
import { useEffect } from "react";

const DetailTransaksi = ({ id }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  //fetch api
  const { data, error, isLoading } = useSWR(
    `${API_URL}/api/order/${id}`,
    fetchGet
  );
  if (error) {
    console.error("Fetch Error :", error?.response.data.message);
  }

  //scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="relative mb-20">
        <p className="font-semibold text-3xl mb-10">Detail Transaksi</p>
        <div className="space-y-10 md:flex md:gap-10 md:space-y-0">
          {isLoading ? (
            <SkeletonRecipe />
          ) : (
            <div className="w-full bg-white border shadow-xl rounded-xl ">
              {data && (
                <img
                  className="w-full max-h-72 object-cover"
                  src={data.data.image}
                  alt="img-Food"
                />
              )}
              {data && <OrderDetail data={data.data} />}
            </div>
          )}
          {isLoading ? (
            <SkeletonRecipe />
          ) : (
            <div className="w-full bg-white border shadow-xl rounded-xl py-4 px-6">
              {data && <OrderList data={data.data.ingredients} />}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailTransaksi;
