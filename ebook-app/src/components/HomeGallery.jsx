import Card from "./card";
import React, { useEffect, useState } from "react";

function HomeGallery(props) {
  const [search, setSearch] = useState("");
  const [print, setPrint] = useState("search");
  const [price, setPrice] = useState(0);
  const [searchResults, setSerchResults] = useState([]);
  const [priceResults, setPriceResults] = useState([]);

  useEffect(() => {
    let searchedObjects = props.data;

    searchedObjects = props.data.filter((book) => {
      return book.language.toLowerCase().includes(search.toLowerCase().trim());
    });

    setSerchResults(searchedObjects);
  }, [search]);

  useEffect(() => {
    let searchedObjects = props.data.filter((book) => {
      return book.price < price;
    });

    setPriceResults(searchedObjects);
  }, [price]);

  function returnEqual(searchResults, priceResults) {
    if (searchResults.length < priceResults.length) {
      return searchResults.filter((element) => {
        return priceResults.find((ele) => ele == element);
      });
    } else {
      return priceResults.filter((element) => {
        return searchResults.find((ele) => ele == element);
      });
    }
  }

  return (
    <>
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-50 m-5">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required=""
            onChange={(e) => {
              setSearch(e.target.value);
              if (price != 0) {
                setPrint("price&search");
              } else setPrint("search");
            }}
            value={search}
          />
        </div>
        <label
          htmlFor="minmax-range"
          className="block mb-3 items-center  text-sm w-70 m-2  text-black-900 font-bold dark:text-gray-300"
        >
          Price: {price} $
        </label>
        <input
          id="minmax-range"
          type="range"
          min="0"
          max="50"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            if (search != "") {
              setPrint("price&search");
            } else setPrint("price");
          }}
          className="w-70 m-5 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />

        <button
          type="button"
          onClick={(e) => {
            setPrice(0);
            setSearch("");
            setPrint("search");
          }}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Reset
        </button>
      </form>

      {print == "search" ? (
        <Card results={searchResults} />
      ) : print == "price" ? (
        <Card results={priceResults} />
      ) : (
        <Card results={returnEqual(searchResults, priceResults)} />
      )}
    </>
  );
}

export default HomeGallery;
