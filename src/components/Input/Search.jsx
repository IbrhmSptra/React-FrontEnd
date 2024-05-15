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
} from "../../redux/slice/webContent";
import SearchItem from "./SearchItem";
import useAnotherCompClicked from "../../hooks/useAnotherCompClicked";
import axios from "axios";
import useSWR from "swr";
import useDebounce from "../../hooks/useDebounce";

const Search = forwardRef((props, ref) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const searchExpand = useSelector((state) => state.webcontent.searchExpand);

  //close search item when user click another component
  useAnotherCompClicked(ref, () => {
    dispatch(closeSearchExpand());
  });

  //fetch API
  const fetcher = (url) => axios(url).then((res) => res.data);
  const debounceSearch = useDebounce(searchQuery, 500);
  const { data, error, isLoading } = useSWR(
    () =>
      debounceSearch
        ? `${API_URL}/api/food/search?query=${debounceSearch}`
        : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );
  if (error) {
    console.error("Fetch Error :", error?.response.data.message);
  }

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
        {searchExpand && data?.data?.length > 0 && (
          <div
            className="w-full bg-card border-2 border-primary rounded-xl divide-y divide-y-grayText bg-white absolute"
            ref={ref}
          >
            {data.data.slice(0, 3).map((value, i) => (
              <SearchItem data={value} key={i} />
            ))}
          </div>
        )}
      </div>
    </>
  );
});

export default Search;
