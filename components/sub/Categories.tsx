"use client"

import React from "react";

interface Props {
  filter: (arg0: string) => void;
  categories: string[];
}

function Categories({ filter, categories }: Props) {
  return (
    <div className="w-[500px] h-full flex flex-row items-center justify-center my-20 text-gray-300">
      <div className="flex items-center justify-between w-full h-auto border-[#7042f861] bg-purple-800 mr-[10px] px-[40px] py-[10px] rounded-full">
        {categories.map((category, i) => (
          <button
            type="button"
            className="cursor-pointer"
            key={i}
            onClick={() => filter(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
