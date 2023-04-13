"use client";
import { motion } from "framer-motion";
import GoToTop from "../utils/goToTop";
import { ProjectData } from "../utils/ProjectData";
import Project from "../components/Project";
//=============================================

function page() {

  return (
    <div className="flex flex-col h-fit  pt-8 lg:pt-12 pb-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="font-spaceMono text-gray-300 text-2xl mb-8 md:text-4xl lg:text-4xl text-center lg:mb-8"
      >
        Here are some of my projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="block lg:grid lg:grid-cols-3 lg:justify-between lg:gap-8 md:grid md:grid-cols-2 mx-auto"
      >
       {ProjectData.map((project) => (
          <Project projectName={project.projectName} logo={project.logo} description={project.description} gitHubLink={project.gitHubLink} deployLink={project.deployLink} technologiesUsed={project.technologiesUsed}/>
       ))}
      </motion.div>
      <GoToTop />
    </div>
  );
}

export default page;








