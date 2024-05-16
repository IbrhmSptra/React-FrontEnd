const Detail1 = ({ data }) => {
  return (
    <>
      <div className="py-4 px-6">
        <h1 className=" text-center font-bold text-xl mb-4">{data.name}</h1>
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
            <p>{data.ingredients.length}</p>
            <p>
              Rp
              {data.price.toLocaleString("id-ID", {
                styles: "currency",
                currency: "IDR",
              })}
            </p>
            <p>COD (Cash On Delivery)</p>
            <p>{data.location}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail1;
