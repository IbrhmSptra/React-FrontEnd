const DetailPemesananPertama = ({ bahan }) => {
  return (
    <div>
      <p className=" text-tertiary text-xl font-semibold">Detail Harga</p>
      <div className="flex text-wrap font-poppins relative justify-between text-sm mt-4">
        <div>
          {bahan &&
            bahan.map((value, i) => (
              <p key={i}>
                <span className="text-tertiary">{value.angka} </span>
                {value.bahan}
              </p>
            ))}
        </div>
        <div>
          {bahan &&
            bahan.map((value, i) => (
              <p key={i}>
                Rp
                {value.harga.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPemesananPertama;
