const RingkasanTransaksi = ({ data }) => {
  return (
    <div className="">
      <h1 className="text-tertiary text-xl font-semibold">
        Ringkasan Transaksi
      </h1>
      <div className="flex space-x-4 font-poppins mt-6 text-sm">
        <div className="text-grayText">
          <h3>Total Bahan</h3>
          <h3>Total Harga</h3>
          <h3>Pembayaran</h3>
        </div>
        <div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
        </div>
        <div>
          <p>{data.ingredients.length}</p>
          <p>
            Rp
            {data.ingredients.reduce(
              (total, ingredient) => total + ingredient.price,
              0
            )}
          </p>
          <p>COD (Cash On Delivery)</p>
        </div>
      </div>
    </div>
  );
};

export default RingkasanTransaksi;
