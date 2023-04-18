"use client";
import { frontEndTech } from "../utils/CurrentTechData";
import { backEndTech } from "../utils/CurrentTechData";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function CurrentTech() {
  return (
    <main className="mt-16 lg:mt-40 text-center font-spaceMono" id='currentTech'>
     <h1 className="text-gray-300 text-3xl md:text-4xl lg:text-5xl pb-20">Current Tech Stack</h1>
      <section className="flex flex-col lg:flex-row justify-around mb-30">
        <div className="w-80 mx-auto lg:mx-0 pb-12 lg:pb-0">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-4xl text-gray-300 pb-8 text-center underline"
          >
            Frontend
          </motion.h1>
          <ul className="text-xl md:text-3xl lg:text-3xl text-gray-300 flex flex-col px-4">
            {frontEndTech.map((tech, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between py-3 gap-8 lg:transition lg:ease-in-out lg:hover:scale-110 lg:duration-300"
              >
                {tech.name}
                {tech.logo}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-80 mx-auto lg:mx-0">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-4xl text-gray-300 pb-8 text-center underline"
          >
            Backend
          </motion.h1>
          <ul className="text-xl md:text-3xl lg:text-3xl text-gray-300 flex flex-col w-full px-4 pb-4">
            {backEndTech.map((tech, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between py-3 gap-8  lg:transition lg:ease-in-out lg:hover:scale-110 lg:duration-300"
              >
                {tech.name}
                {tech.logo}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      <div className="flex justify-center mb-2">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          className="font-spaceMono text-xl mt-8 mb-8 lg:mt-28 text-gray-300 flex justify-center hover:cursor-pointer w-fit hover:text-gray-400"
        >
          Back to top
        </Link>
      </div>
    </main>
  );
}

export default CurrentTech;
