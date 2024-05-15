const Pagination = ({ setPage, totalPage }) => {
  if (totalPage > 1) {
    return (
      <div className="flex items-center justify-center mt-16 mb-10">
        {Array.from({ length: totalPage }).map((item, index) => (
          <button
            key={index}
            className="mx-1 px-3 py-2 rounded-full bg-white shadow-xl font-semibold"
            onClick={() => {
              setPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
