import { useState, useEffect } from "react";
import arrow from "../assets/img/Filter/right-arrow-svgrepo-com.png";

const Filter = ({ filter }) => {
  const [selectedFilter, setSelectedFilter] = useState(filter[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(selectedFilter);
  }, [selectedFilter]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-[56px] flex items-center">
      <p className="text-xl font-['Poppins']">Urutkan :</p>
      <div className="relative ml-4" onClick={toggleDropdown}>
        <div className="w-[240px] h-[30px] sm:w-[338px] sm:h-[37px] md:w-[338px] md:h-[37px] lg:w-[338px] lg:h-[37px] bg-white rounded-[15px] border border-yellow-400 relative z-9">
          <img
            className="w-[20px] h-[14px] absolute right-0 top-1/2 transform -translate-y-1/2 mr-4"
            src={arrow}
          />
          <p className="text-black text-lg sm:text-xl font-normal font-['Poppins'] ml-[20px] sm:ml-[40px] md:ml-[40px] lg:ml-[40px] md:p-1 lg:p-1">
            {selectedFilter}
          </p>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-[240px] sm:w-[338px] bg-white rounded-[15px] border border-yellow-400 z-9">
              {filter.map((value, i) => (
                <p
                  className="p-2 hover:bg-gray-100 cursor-pointer rounded-[15px]"
                  onClick={() => handleFilterChange(value)}
                  key={i}
                >
                  {value}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
