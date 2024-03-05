import { Link } from "react-router-dom";

const SearchItem = ({ data }) => {
  return (
    <>
      <div className="p-4 text-headline" onClick={() => {}}>
        <Link
          to={`/detailresep/${data.id}`}
          className="flex gap-x-6 items-center"
        >
          <img
            className="w-1/2 object-cover max-h-32"
            src="https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/public/kategori/allfood/img/jjajangmyeon.png"
            alt="Poster-Movies"
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
