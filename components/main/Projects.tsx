import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ProjectList } from "@/constants";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-cover py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-10">
        My Projects
      </h1>
      <div className="w-[500px] h-full flex flex-row items-center justify-center my-20 text-gray-300">
        <div className="flex items-center justify-between w-full h-auto border-[#7042f861] bg-purple-800 mr-[10px] px-[40px] py-[10px] rounded-full">
          <a href="#about-me" className="cursor-pointer">
            All
          </a>
          <a href="#skills" className="cursor-pointer">
            Next.js
          </a>
          <a href="#projects" className="cursor-pointer">
            React
          </a>
          <a href="#contact" className="cursor-pointer">
            Typescript
          </a>
        </div>
      </div>
      <div className="h-full w-full grid grid-cols-3 gap-5 max-w-[90%] max-h-[90%]">
        {ProjectList.map((project, index) => (
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
