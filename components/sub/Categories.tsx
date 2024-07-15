"use client";

import React, { useState } from "react";

interface Props {
  filter: (category: string) => void;
  categories: string[];
}

function Categories({ filter, categories }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (
    category: string,
    index: React.SetStateAction<number>
  ) => {
    setActiveIndex(index);
    filter(category);
    console.log("clicked");
  };

  return (
    <div className="w-[500px] h-full flex flex-row items-center justify-center my-20 sm:my-10 z-[50]">
      <div className="flex items-center justify-between sm:w-full h-auto border-[#7042f861] bg-purple-800 rounded-full cursor-pointer mx-0 sm:mr-2.5">
        {categories.map((category, i) => (
          <button
            className={`px-5 sm:px-10 py-2.5 rounded-full ${
              activeIndex === i ? "text-black bg-white" : "text-gray-300"
            }`} // Dynamically add active class
            key={i}
            onClick={() => handleClick(category, i)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
