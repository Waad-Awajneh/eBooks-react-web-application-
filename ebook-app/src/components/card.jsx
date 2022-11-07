import React from "react";

function Card({ results }) {
  console.log(results);

  return (
    <>
      <div className="m-5 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.map((cardinfo, i) => (
          <div
            key={i}
            className="my-5 bg-white dark:bg-[#18191c]  shadow-xl hover:shadow-purple-300 to-blue-500-900 duration-200 rounded-xl"
          >
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

export default Card;
