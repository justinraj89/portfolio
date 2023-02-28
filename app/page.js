"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="px-6 lg:px-0 lg:grid lg:grid-cols-2 mt-6 lg:mt-0">
      <div className="lg:mt-12 w-fit lg:col-span-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="px-4 "
        >
          <h1 className="text-gray-100 font-spaceMono text-3xl lg:text-6xl font-bold text-center">
            Hi! I'm Justin
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="px-4 pt-4"
        >
          <p className="text-gray-100 text-2xl lg:text-4xl font-spaceMono lg:pl-4 ">
            Los Angeles based web developer.
          </p>
        </motion.div>

        {/* <div>
          <h1 className="text-gray-100 text-4xl hidden lg:block">placeholder text</h1>
        </div> */}
      </div>

      <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ delay: 0.7, duration: 0.3 }}
      className="lg:col-span-1 mt-12 flex lg:justify-end justify-center px-4">
        <img src="/me.png" alt="me" className="w-64 lg:w-96" />
        </motion.div>      
    </div>
    
  );
}


