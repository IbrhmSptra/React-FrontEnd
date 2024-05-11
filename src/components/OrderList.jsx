const Detail2 = ({ data }) => {
  return (
    <div>
      <p className=" text-tertiary text-xl font-semibold">Detail Harga</p>
      <div className="flex text-wrap font-poppins relative mt-4 justify-between text-sm">
        <div>
          {data &&
            data.map((value, i) => (
              <p key={i}>
                <span className="text-tertiary">{value.angka} </span>
                {value.bahan}
              </p>
            ))}
        </div>
        <div className="">
          {data &&
            data.map((value, i) => (
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

export default Detail2;
