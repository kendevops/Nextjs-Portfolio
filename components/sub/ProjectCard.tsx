"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

interface Props {
  src: string;
  title: string;
  description: string;
  projectUrl: string;
  githubUrl?: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  projectUrl,
  githubUrl,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group z-50">
      <div className="w-full h-64 overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={340}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="flex gap-4 mx-4 my-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.a
          variants={slideInFromLeft(1)}
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-blue-500"
        >
          View Project!
        </motion.a>
        {githubUrl && (
          <motion.a
            variants={slideInFromRight(1)}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-green-500"
          >
            View Code!
          </motion.a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
