import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeSearchExpand } from "../../redux/slice/webContent";

const SearchItem = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="p-4 text-headline"
        onClick={() => {
          dispatch(closeSearchExpand());
        }}
      >
        <Link
          to={`/recipepage/${data.id}`}
          className="flex gap-x-6 items-center"
        >
          <img
            className="w-1/2 object-cover max-h-32 min-w-32"
            src={`${data.image}`}
            alt="Food-Image"
          />
          <div className="w-full space-y-0.5 ">
            <h1 className="text-base md:text-lg font-semibold">
              {data.category}
            </h1>
            <p className="text-sm">{data.name}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SearchItem;
