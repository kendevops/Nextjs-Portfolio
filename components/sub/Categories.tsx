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
  };

  return (
    <div className="w-[500px] h-full flex flex-row items-center justify-center my-20">
      <div className="flex items-center justify-between w-full h-auto border-[#7042f861] bg-purple-800 mr-[10px]">
        {categories.map((category, i) => (
          <button
            type="button"
            className={`px-[40px] py-[10px] rounded-full ${
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
