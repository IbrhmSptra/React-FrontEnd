const Pagination = () => {
  return (
    <div className="flex items-center justify-center mt-16 mb-10">
      {["<", "1", "2", "3", "4", "...", "8", ">"].map((item, index) => (
        <button
          key={index}
          className="mx-1 px-3 py-2 rounded-full bg-white shadow-xl font-semibold"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
