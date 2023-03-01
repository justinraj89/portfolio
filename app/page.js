"use client";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import { Link } from "react-scroll";
//=============================================================

export default function Home() {
  return (
    <>
      <div className="px-4 lg:px-0 lg:grid lg:grid-cols-2 mt-6 lg:mt-12 flex flex-col">
        <div className="lg:mt-36 w-fit lg:col-span-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="px-4 "
          >
            <h1 className="text-gray-100 font-spaceMono text-3xl lg:text-6xl font-bold text-center tracking-wide">
              Hi! I'm Justin
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="px-4 pt-4"
          >
            <p className="text-gray-100 text-2xl lg:text-4xl font-spaceMono lg:pl-2 tracking-wide text-center lg:text-left">
              Los Angeles based web developer.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="lg:col-span-1 mt-6 lg:mt-12 flex lg:justify-end justify-center px-4"
        >
          <img src="/me.png" alt="me" className="w-64 lg:w-96" />
        </motion.div>
        <Link to="about" spy={true} smooth={true} offset={-50} className="scroll-down hidden lg:block lg:hover:cursor-pointer"></Link>
      </div>

      <div className="h-screen  mt-32" id='about'>

      </div>


      <Footer />
    </>
  );
}


// initial={{ opacity: 0 }}
// whileInView={{ opacity: 1 }}
// transition={{ delay: 0.3, duration: 1 }}
// viewport={{ once: false }}


