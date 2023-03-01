"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { showToast } from "../utils/toast";
//=======================================

function page() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      emailjs.send(
        "service_9r8hrqk",
        "template_f7p9fat",
        values,
        "eW8kyK6tHR-aUkVb_"
      );
      showToast("SUCCESS", "😛 Message sent!");
    } catch (err) {
      showToast("ERROR", err.message);
    }
    setValues({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="flex items-center mt-8 lg:mt-24 px-6 lg:px-0">
        <div className="mx-auto w-full max-w-lg lg:max-w-xl text-gray-100 font-spaceMono">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-3xl lg:text-5xl text-center"
          >
            Contact me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="mt-3 text-2xl lg:text-3xl text-gray text-center "
          >
            Feel free to reach out!
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            onSubmit={handleSubmit}
            className="mt-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-gray-100 bg-transparent py-2.5 px-0 text-sm text-gray-100 focus:border-green-300 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-100 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-300">
                  Your name
                </label>
              </div>

              <div className="relative z-0">
                <input
                  value={values.email}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-gray-100 bg-transparent py-2.5 px-0 text-sm text-gray-100 focus:border-green-300 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-100 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-300">
                  Your email
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <textarea
                  value={values.message}
                  onChange={handleChange}
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b border-gray-100 bg-transparent py-2.5 px-0 text-sm text-gray-100 focus:border-green-300 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-100 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-300">
                  Your message
                </label>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="mt-5 rounded-md bg-green-500 px-8 py-2 text-white transition ease-in-out delay-100 hover:scale-105 duration-300"
              >
                SEND MESSAGE
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="h-44 justify-center items-center flex flex-col"
      >
        <div className="flex justify-center" id="contact">
          <a
            href="https://github.com/justinraj89"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 text-gray-100 lg:transition lg:ease-in-out lg:delay-150 hover:text-green-300 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300"
          >
            <FaGithub className="h-12 w-12" />
          </a>
          <button
            onClick={() =>
              (window.location = "mailto:rajewskijustin@gmail.com")
            }
            className="px-8 text-gray-100 lg:transition lg:ease-in-out lg:delay-150 hover:text-green-300 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300"
          >
            <MdOutlineMailOutline className="h-12 w-12" />
          </button>
          <a
            href="https://www.linkedin.com/in/justinrajewski89/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 text-gray-100 lg:transition lg:ease-in-out lg:delay-150 hover:text-green-300  lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300"
          >
            <RxLinkedinLogo className="h-12 w-12" />
          </a>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
}

export default page;
