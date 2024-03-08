// import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CookingMethod = ({ data }) => {
  return (
    <div className="border rounded-xl shadow-2xl sm:w-1/2 mt-4 p-4">
      <h3 className="text-tertiary text-lg">Mari Masak</h3>
      <ol className="list-decimal px-4 marker:text-tertiary space-y-2 mt-3 text-sm">
        {data && data.map((value, i) => <li key={i}>{value.cara}</li>)}
      </ol>
    </div>
  );
};

export default CookingMethod;
