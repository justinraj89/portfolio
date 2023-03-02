"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
//=============================================================

export default function Home() {
  return (
    <>
      <div className="md:h-screen lg:h-screen">
        <div
          className="px-4 lg:px-0 lg:grid lg:grid-cols-2 mt-6 lg:mt-12 flex flex-col"
          id="home"
        >
          <div className="md:mt-12 lg:mt-36 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: false }}
              className="px-4 "
            >
              <h1 className="text-gray-300 font-spaceMono text-3xl md:text-5xl lg:text-6xl font-bold text-center tracking-wide">
                Hi! I'm Justin
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: false }}
              className="px-4 pt-4"
            >
              <p className="text-gray-300 text-2xl md:text-3xl lg:text-4xl font-spaceMono lg:pl-2 tracking-wide text-center md:text-center lg:text-left">
                Los Angeles based web developer.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: false }}
            className="lg:col-span-1 mt-6 lg:mt-12 flex lg:justify-end justify-center px-4"
          >
            <img src="/me.png" alt="me" className="w-64 md:w-96 md:mt-8 lg:w-96" />
          </motion.div>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            className="scroll-down hidden md:block lg:block lg:hover:cursor-pointer"
          ></Link>
        </div>
      </div>

      <div className="md:h-screen lg:h-screen mt-16">
        <div
          className="lg:mt-32 lg:grid lg:grid-cols-2 mt-6 flex flex-col"
          id="about"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: false }}
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
              viewport={{ once: false }}
              className="md:text-5xl lg:text-6xl lg:text-right text-center text-4xl text-gray-400 mt-8 lg:mt-0"
            >
              about me
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: false }}
              className="text-xl lg:text-3xl lg:text-right pt-8 text-gray-300 text-center"
            >
            I am a web developer with a passion for creating smooth, intutive user experiences.
              
            </motion.p>
            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: false }}
            className="text-xl lg:text-3xl lg:text-right pt-8 text-gray-300 text-center mb-4 lg:mb-0"
            >
              When I'm not coding, I love drawing, hiking, making music, and skateboarding.
            </motion.p>
          </div>
        </div>

        <div className="flex justify-center">
        <Link to="home" spy={true} smooth={true} offset={-100} 
        className='font-spaceMono text-xl mt-8 mb-8 lg:mt-28 text-gray-100 flex justify-center hover:cursor-pointer w-fit hover:text-gray-400'>
            Back to top
          </Link>
        </div>

      </div>

    </>
  );
}
