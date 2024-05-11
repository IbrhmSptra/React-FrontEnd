const Detail1 = ({ data, jumlah }) => {
  return (
    <>
      <div className="py-4 px-6">
        <h1 className=" text-center font-bold text-xl mb-4">{data.food}</h1>
        <div className="flex gap-x-4 font-poppins text-sm">
          <div>
            <h3>Total Bahan</h3>
            <h3>Total Harga</h3>
            <h3>Pembayaran</h3>
            <h3>Alamat</h3>
          </div>
          <div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
          </div>
          <div>
            <p>{jumlah}</p>
            <p>{data.harga}</p>
            <p>COD (Cash On Delivery)</p>
            <p>{data.alamat}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail1;
