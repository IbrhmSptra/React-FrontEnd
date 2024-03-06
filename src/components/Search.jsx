/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React, { forwardRef, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSearchExpand,
  closeSidebar,
  openSearchExpand,
} from "../redux/slice/webContent";
import SearchItem from "./SearchItem";
import useAnotherCompClicked from "../hooks/useAnotherCompClicked";
import { searchFood } from "../services/supabase.service";

const Search = forwardRef((props, ref) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useDispatch();
  const searchExpand = useSelector((state) => state.webcontent.searchExpand);
  const value = {
    id: 1,
    category: "Nusantara",
    name: "Nasi Goreng",
  };

  //close search item when user click another component
  useAnotherCompClicked(ref, () => {
    dispatch(closeSearchExpand());
  });

  useEffect(() => {
    if (searchQuery !== "") {
      const delay = setTimeout(() => {
        searchFood((data) => {
          setSearchResult(data);
        }, searchQuery);
      }, 500);
      return () => {
        clearTimeout(delay);
      };
    } else {
      const delay = setTimeout(() => {
        dispatch(closeSearchExpand());
        setSearchResult([]);
      }, 500);
      return () => {
        clearTimeout(delay);
      };
    }
  }, [searchQuery]);

  return (
    <>
      <div className="relative w-full space-y-1">
        <div className="w-full h-fit relative">
          <FiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-grayText" />
          <input
            type="text"
            className="w-full rounded-2xl text-grayText text-sm font-light pl-10 py-1"
            placeholder="Cari Resep"
            onFocus={() => {
              dispatch(closeSidebar());
              dispatch(openSearchExpand());
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              dispatch(openSearchExpand());
            }}
            value={searchQuery}
          />
        </div>
        {searchExpand && searchResult.length > 0 && (
          <div
            className="w-full bg-card border-2 border-primary rounded-xl divide-y divide-y-grayText bg-white"
            ref={ref}
          >
            {searchResult.slice(0, 3).map((value, i) => (
              <SearchItem data={value} key={i} />
            ))}
          </div>
        )}
      </div>
    </>
  );
});

export default Search;
