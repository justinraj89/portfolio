"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
//=======================================

function AboutMe() {
  return (
    <div className="md:h-screen lg:h-screen mt-16">
      <div
        className="lg:mt-32 lg:grid lg:grid-cols-2 mt-6 flex flex-col"
        id="about"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="px-4 flex lg:justify-start justify-center lg-col-span-1"
        >
          <img
            src="/thanks.png"
            alt="collage"
            className="border-2 w-64 md:w-96 lg:w-96"
          />
        </motion.div>

        <div className="lg:col-span-1 font-spaceMono px-4">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="md:text-5xl lg:text-6xl lg:text-right text-center text-4xl text-gray-400 mt-8 lg:mt-0"
          >
            about me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl lg:text-right pt-8 text-gray-300 text-center"
          >
            I am a web developer with a passion for creating smooth, intutive
            user experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl lg:text-right pt-8 text-gray-300 text-center mb-4 lg:mb-0"
          >
            When I'm not coding, I love drawing, hiking, making music, and
            skateboarding.
          </motion.p>
        </div>
      </div>

      <div className="flex justify-center">
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
    </div>
  );
}

export default AboutMe;
