import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        
        return (
        <label>
          <input type="radio" name="rating" value={currentRating} className="hidden" onClick={() => setRating(currentRating)} />
          <FaStar size={40} className="cursor-pointer" color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"} onMouseEnter={() => setHover(currentRating)} onMouseLeave={() => setHover(null)}/>
        </label> 
        )
             })}
             <p className="ml-2 pt-1 flex items-center">( 20 )</p>
     
  </div>
  );
};

export default StarRating;