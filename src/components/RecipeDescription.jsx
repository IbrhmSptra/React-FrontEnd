
const RecipeDescription = ({ namamenu, shortdescription }) => {
    return ( 
        <div >
        < h1 className = "text-lg p-2 font-bold" > { namamenu } </h1>
        <p className = "p-2 text-sm"> {shortdescription}</p>
      </div>


    );
};

export default RecipeDescription;