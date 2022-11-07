import React, { useEffect, useState } from "react";

function HomeGallery(props) {
  const [search, setSearch] = useState("");
  const [print, setPrint] = useState("search");
  const [price, setPrice] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    let searchedObjects = props.data;
    if (print == "search")
      searchedObjects = props.data.filter((book) => {
        return book.language.toLowerCase().includes(search.toLowerCase());
      });
    if (print == "price") {
      console.log(print);
      searchedObjects = props.data.filter((book) => {
        return book.price < price;
      });
    }

    setResults(searchedObjects);
  }, [search, price]);

  // useEffect(() => {

  //   let searchedObjects = props.data.filter((book) => {
  //     return book.price < price;
  //   });

  //   setResults(searchedObjects);
  // }, [price]);

  return (
    <>
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-50 m-5">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required=""
            onChange={(e) => {
              setSearch(e.target.value);
              setPrint("search");
            }}
            value={search}
          />
        </div>
      </form>

      <label
        for="minmax-range"
        class="block mb-2 text-sm w-70 m-5 font-medium text-gray-900 dark:text-gray-300"
      >
        Min-max range
      </label>
      <input
        id="minmax-range"
        type="range"
        min="0"
        max="50"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
          setPrint("price");
        }}
        class="w-70 m-5 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />

      <div className="m-5 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.map((cardinfo) => (
          <div className="my-5 bg-white dark:bg-[#18191c] shadow-xl hover:shadow duration-200 rounded-xl">
            <div className="p-4">
              <h5 className="text-primary dark:text-white font-medium text-sm">
                {cardinfo.language}
              </h5>
              <small className="text-xs font-light text-primary dark:text-gray-400">
                {cardinfo.edition}
              </small>
              <p className="text-xs font-light text-primary dark:text-gray-400">
                {cardinfo.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeGallery;
