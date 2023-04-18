"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiOutlineDown } from "react-icons/ai"
import Typewriter from "typewriter-effect";
//========================================

function Bio() {
  return (
    <div className="md:h-screen lg:h-screen">
      <div
        className="px-4 lg:px-0 lg:grid lg:grid-cols-2 mt-6 flex flex-col"
        id="home"
      >
        <div className="md:mt-8 lg:mt-32 lg:col-span-1">
          <div className="text-gray-300 font-spaceMono text-3xl md:text-5xl lg:text-5xl font-bold text-center lg:text-left lg:px-4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("justin rajewski").pauseFor(2500).start();
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="px-4 pt-2 lg:pt-6"
          >
            <p className="text-gray-300 text-xl md:text-3xl lg:text-4xl font-spaceMono tracking-wide text-center md:text-center lg:text-left">
              Los Angeles based web developer.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:flex px-4 gap-8 pt-6 text-gray-400 justify-center lg:justify-start hidden"
          >
            <li className="lg:hover:text-gray-500 lg:transition lg:ease-in-out lg:delay-150 lg:hover:scale-110 lg:duration-300">
              <a
                href="https://github.com/justinraj89"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaGithub className="h-10 w-10" />
              </a>
            </li>

            <li className="lg:hover:text-gray-500 lg:transition lg:ease-in-out lg:delay-150 lg:hover:scale-110 lg:duration-300">
              <button
                onClick={() =>
                  (window.location = "mailto:rajewskijustin@gmail.com")
                }
                className=""
              >
                <MdOutlineMailOutline className="h-10 w-10" />
              </button>
            </li>

            <li className="lg:hover:text-gray-500 lg:transition lg:ease-in-out lg:delay-150 lg:hover:scale-110 lg:duration-300">
              <a
                href="https://www.linkedin.com/in/justinrajewski89/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <RxLinkedinLogo className="h-10 w-10" />
              </a>
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-1 mt-6 lg:mt-2 flex lg:justify-end justify-center px-4"
        >
          <img
            src="/me.png"
            alt="me"
            className="w-64 md:w-96 md:mt-8 lg:w-96"
          />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: false }}
          className="md:flex px-4 gap-12 pt-10 text-gray-400 justify-center hidden lg:hidden"
        >
          <li className="lg:hover:text-gray-500">
            <a
              href="https://github.com/justinraj89"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaGithub className="h-12 w-12" />
            </a>
          </li>

          <li className="lg:hover:text-gray-500">
            <button
              onClick={() =>
                (window.location = "mailto:rajewskijustin@gmail.com")
              }
              className=""
            >
              <MdOutlineMailOutline className="h-12 w-12" />
            </button>
          </li>

          <li className="lg:hover:text-gray-500">
            <a
              href="https://www.linkedin.com/in/justinrajewski89/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <RxLinkedinLogo className="h-12 w-12" />
            </a>
          </li>
        </motion.ul>

       
      </div>
      <div className="flex justify-center text-gray-300 mt-16">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-140}
          className="scroll-down hidden md:hidden lg:block hover:cursor-pointer hover:text-gray-400"
        >
          <AiOutlineDown className="h-8 w-8"/>
        </Link>
        </div>
    </div>
  );
}

export default Bio;




{/* <div className="md:h-screen lg:h-screen">
      <div
        className="px-4 lg:px-0 lg:grid lg:grid-cols-2 mt-6 flex flex-col"
        id="home"
      >
        <div className="md:mt-8 lg:mt-32 lg:col-span-1">
          <div className="text-gray-300 font-spaceMono text-3xl md:text-5xl lg:text-5xl font-bold text-center lg:text-left lg:px-4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("justin rajewski").pauseFor(2500).start();
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="px-4 pt-2 lg:pt-6"
          >
            <p className="text-gray-300 text-xl md:text-3xl lg:text-4xl font-spaceMono tracking-wide text-center md:text-center lg:text-left">
              Los Angeles based web developer.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:flex px-4 gap-8 pt-6 text-gray-400 justify-center lg:justify-start hidden"
          >
            <li className="lg:hover:text-gray-500 lg:transition lg:ease-in-out lg:delay-150 lg:hover:scale-110 lg:duration-300">
              <a
                href="https://github.com/justinraj89"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaGithub className="h-10 w-10" />
              </a>
            </li>

            <li className="lg:hover:text-gray-500 lg:transition lg:ease-in-out lg:delay-150 lg:hover:scale-110 lg:duration-300">
              <button
                onClick={() =>
                  (window.location = "mailto:rajewskijustin@gmail.com")
                }
                className=""
              >
                <MdOutlineMailOutline className="h-10 w-10" />
              </button>
            </li>

            <li className="lg:hover:text-gray-500 lg:transition lg:ease-in-out lg:delay-150 lg:hover:scale-110 lg:duration-300">
              <a
                href="https://www.linkedin.com/in/justinrajewski89/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <RxLinkedinLogo className="h-10 w-10" />
              </a>
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-1 mt-6 lg:mt-2 flex lg:justify-end justify-center px-4"
        >
          <img
            src="/me.png"
            alt="me"
            className="w-64 md:w-96 md:mt-8 lg:w-96"
          />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: false }}
          className="md:flex px-4 gap-12 pt-10 text-gray-400 justify-center hidden lg:hidden"
        >
          <li className="lg:hover:text-gray-500">
            <a
              href="https://github.com/justinraj89"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaGithub className="h-12 w-12" />
            </a>
          </li>

          <li className="lg:hover:text-gray-500">
            <button
              onClick={() =>
                (window.location = "mailto:rajewskijustin@gmail.com")
              }
              className=""
            >
              <MdOutlineMailOutline className="h-12 w-12" />
            </button>
          </li>

          <li className="lg:hover:text-gray-500">
            <a
              href="https://www.linkedin.com/in/justinrajewski89/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <RxLinkedinLogo className="h-12 w-12" />
            </a>
          </li>
        </motion.ul>

       
      </div>
      <div className="flex justify-center text-gray-300 mt-16">
        <Link
          to="about"
          spy={true}
          smooth={true}
          className="scroll-down hidden md:hidden lg:block hover:cursor-pointer hover:text-gray-400"
        >
          <AiOutlineDown className="h-8 w-8"/>
        </Link>
        </div>
    </div> */}
