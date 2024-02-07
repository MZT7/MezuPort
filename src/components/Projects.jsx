/* eslint-disable react/prop-types */
// B.js
// import React from 'react';
import { motion } from "framer-motion";
import { TbClick } from "react-icons/tb";

const Projects = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative flex items-center justify-center px-2 mx-auto backdrop-filter backdrop-blur-sm bg-opacity-10"
    >
      <div className="grid grid-cols-1 gap-1 mx-auto sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.id}
            href={`/project/${project.id}`}
            className="flex-1 m-3 lg:max-w-2xl "
          >
            <span className="border-2 border-gray-300 text-gray-600 animate-pulse text-xs rounded-full px-3 py-0.5">
              Open <TbClick className="inline" />
            </span>

            <div className="relative mt-2 aspect-w-16 aspect-h-9 ">
              <video
                className="object-cover w-full h-full rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={project.videoUrl} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="m-2 text-gray-700">{project.title}</div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
