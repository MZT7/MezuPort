// A.js
// import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
// import process from "dotenv/config";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const Resume = () => {
  // const handleDownload = () => {
  //   // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
  //   const pdfFilePath =
  //     // eslint-disable-next-line no-undef
  //     !process.env.NODE_ENV || !process.env.NODE_ENV === "development"
  //       ? "/MezuResume.pdf"
  //       : "../../public/MezuResume.pdf";

  //   // Create an anchor element
  //   const anchor = document.createElement("a");

  //   // Set the href attribute to the file path
  //   anchor.href = pdfFilePath;

  //   // Set the download attribute to specify the filename for the downloaded file
  //   anchor.download = pdfFilePath;
  //   anchor.target = "_blank";

  //   // Append the anchor element to the body
  //   document.body.appendChild(anchor);

  //   // Trigger a click on the anchor element to initiate the download
  //   anchor.click();

  //   // Remove the anchor element from the body
  //   document.body.removeChild(anchor);
  // };

  const file =
    // eslint-disable-next-line no-undef
    !process.env.NODE_ENV || process.env.NODE_ENV !== "development"
      ? "/MezuResume.pdf"
      : "../../public/MezuResume.pdf";

  const resume = [file];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="fixed bottom-0 left-0 right-0 z-10 w-5/6 p-4 mx-auto my-4 text-center text-white rounded-full bg-zinc-800 backdrop-filter backdrop-blur-md bg-opacity-40 lg:w-1/4">
        <Drawer>
          <DrawerTrigger className="-m-4 text-base font-semibold">
            Download Resume
            <FaCloudDownloadAlt
              className="fixed inline right-5 animate-bounce top-1/4"
              size={26}
            />{" "}
          </DrawerTrigger>

          <DrawerContent className="bg-gray-200">
            <div className="w-full max-w-sm mx-auto">
              <DrawerHeader>
                <DrawerTitle>I am Open to jobs</DrawerTitle>
                <DrawerDescription>
                  Visit the footer for direct contact details
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <a
                  href={resume}
                  className="flex items-center justify-center w-full p-1 text-gray-900 "
                  download={true}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="w-full">
                    Download Resume (PDF){" "}
                    <span className="mx-2">
                      <FaFile />{" "}
                    </span>{" "}
                  </Button>
                </a>
                <DrawerClose>
                  <Button variant="destructive" className="w-full">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.div>
  );
};

export default Resume;
