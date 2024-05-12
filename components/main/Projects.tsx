"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { ProjectList } from "@/constants";
import Categories from "../sub/Categories";

const allCategories = [
  "All",
  ...Array.from(new Set(ProjectList.map((item) => item.category))),
];
const Projects = () => {
  const [categories, setCategories] = useState(allCategories);
const [menuItems, setMenuItems] = useState(() => ProjectList);

  const filter = (category: string) => {
    const filteredData =
      category === "All"
        ? ProjectList
        : ProjectList.filter((item) => item.category === category);
    setMenuItems(filteredData);
  };
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center bg-cover py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-10">
        My Projects
      </h1>
      <Categories filter={filter} categories={categories} />
      <div className="h-full w-full grid grid-cols-3 gap-5 max-w-[90%] max-h-[90%]">
        {menuItems.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
