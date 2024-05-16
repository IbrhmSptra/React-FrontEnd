const RecipeDescription = ({ namamenu, shortdescription }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold"> {namamenu} </h1>
      <p className="text-sm text-grayText mt-2"> {shortdescription}</p>
    </div>
  );
};

export default RecipeDescription;
