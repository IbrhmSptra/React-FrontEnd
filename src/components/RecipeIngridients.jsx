// import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const RecipeIngridients = ({ data }) => {
  return (
    <div className="border rounded-xl shadow-2xl sm:w-1/2 mt-4 p-4">
      <h3 className="text-tertiary text-lg">Bahan</h3>
      <div className="text-sm space-y-1 mt-3">
        {data &&
          data.map((value, i) => (
            <p key={i}>
              <span className="text-tertiary">{value.angka}</span> {value.bahan}
            </p>
          ))}
      </div>
    </div>
  );
};

export default RecipeIngridients;
