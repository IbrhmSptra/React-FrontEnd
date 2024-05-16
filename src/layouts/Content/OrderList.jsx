const Detail2 = ({ data }) => {
  return (
    <div>
      <p className=" text-tertiary text-xl font-semibold">Detail Harga</p>
      <div className="flex text-wrap font-poppins relative mt-4 justify-between text-sm">
        <div>
          {data.map((value, i) => (
            <p key={i}>
              <span className="text-tertiary">{value.amount} </span>
              {value.name}
            </p>
          ))}
        </div>
        <div>
          {data.map((value, i) => (
            <p key={i}>
              Rp
              {value.price.toLocaleString("id-ID", {
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
