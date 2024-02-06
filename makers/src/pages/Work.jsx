// Singleproject.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "../components/ui/skeleton";
import projectsData from "../my-data.json";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { FaLinux } from "react-icons/fa";
import Resume from "../components/Resume";

const Work = () => {
  const { id } = useParams();
  const [project, setproject] = useState(null);

  useEffect(() => {
    // Find the project with the matching ID
    const selectedproject = projectsData.find(
      (item) => item.id === parseInt(id, 10)
    );

    if (selectedproject) {
      setproject(selectedproject);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="mx-4 my-12 space-y-12">
        <Skeleton className="w-full rounded-lg h-96" />
        <div className="flex items-center space-x-4">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>{" "}
      </div>
    );
  }

  // Split the content into paragraphs based on full-stops
  const paragraphs = project.content.split(". ");

  // Replace links in paragraphs with anchor tags
  const paragraphsWithLinks = paragraphs.map((paragraph, index) => {
    const paragraphWithLinks = paragraph.replace(
      /(https?:\/\/[^\s]+)/g,
      (match) =>
        `<a href="${match}" class="text-blue-600 underline" target="_blank" rel="noopener noreferrer">${match}</a>`
    );

    return (
      <p
        key={index}
        className="my-6 leading-loose text-gray-800"
        dangerouslySetInnerHTML={{ __html: paragraphWithLinks }}
      />
    );
  });

  // Split frameworks and tools into arrays
  const frameworksList = project.frameworks
    ? project.frameworks.split(", ")
    : [];
  const toolsList = project.tools ? project.tools.split(", ") : [];

  return (
    <>
      <Resume />
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className=" max-w-5xl mx-auto pt-16 sm:pt-18 lg:pt-18  mb-4  bg-cover  bg-[url('https://framerusercontent.com/images/hREJN8AsFEbJPz6GtPdzL1hLkvc.png')]"
      >
        <div className="py-8 space-y-1 text-xl antialiased tracking-tight text-center sm:text-2xl lg:text-2xl">
          <h1>
            {" "}
            <FaLinux className="inline" />
          </h1>
          <p className="mx-4">{project.title}</p>
          <p className="pt-2 text-base tracking-wide text-gray-400 lg:text-base">
            {project.year}
          </p>

          <a href={project.link} target="_blank" rel="noreferrer">
            <Button variant="outline" className="my-4 text-white bg-black">
              Explore my projects 🚀
            </Button>
          </a>
        </div>
      </motion.div>

      <div className="relative m-2 mt-6 aspect-w-16 aspect-h-9">
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

      <div className="relative mx-4 my-12 lg:w-[930px]">
        {paragraphsWithLinks}

        <div className="grid grid-cols-2 gap-4 text-base">
          <div>
            <h3 className="pt-2 text-gray-400 ">Frameworks</h3>
            <ul>
              {frameworksList.map((framework, index) => (
                <li key={index} className="mt-2 text-sm">
                  {framework}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="pt-2 text-gray-400">Tools</h3>
            <ul>
              {toolsList.map((tool, index) => (
                <li key={index} className="mt-2 text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
