// A.js
// import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FaLinux } from "react-icons/fa";

const Name = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className=" max-w-5xl mx-auto pt-16 sm:pt-18 lg:pt-18 sticky top-0  mb-4  bg-cover  bg-[url('https://framerusercontent.com/images/hREJN8AsFEbJPz6GtPdzL1hLkvc.png')]"
    >
      <div className="py-8 space-y-1 text-2xl antialiased tracking-tight text-center sm:text-6xl lg:text-4xl">
        <h1>
          Mezu Orizu <FaLinux className="inline" />
        </h1>
        <p>Software Engineer</p>
        <p className="pt-2 text-xl text-gray-400 lg:text-xl">
          Crafting Code, Building Tomorrow
        </p>

        <Button variant="outline">Explore my projects 🚀</Button>
      </div>
    </motion.div>
  );
};

export default Name;
