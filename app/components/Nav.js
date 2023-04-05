"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
//==================================================

function Nav({ navbarOpen, setNavbarOpen }) {
  const [prevScrollPos, setPrevScrollPos] = useState(10);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const scrollDelta = currentScrollPos - prevScrollPos;
    if (currentScrollPos > 30) {
      if (scrollDelta > 0 && !navbarOpen) { // check if navbar is open or not
        // Scrolling down
        setVisible(false);
      } else if (scrollDelta < 0 || navbarOpen) { // check if navbar is open or user is scrolling up
        // Scrolling up or navbar open
        setVisible(true);
      }
    } else if (currentScrollPos >= 0) {
      // At top of page
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`sticky top-0 h-16 flex px-8 lg:px-0
    justify-between md:justify-between lg:justify-between items-center z-20 ${
      navbarOpen
        ? "bg-zinc-900 border-none"
        : "backdrop-blur border-b-2 border-zinc-800"
    } ${visible ? 'transition-transform duration-700 transform translate-y-0' : ' transition-transform duration-700 transform -translate-y-full'}`}
    >
      <Link
        href="/"
        className="px-4 lg:px-8 hover:cursor-pointer lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-105 lg:duration-300"
      >
        <img
          src="https://i.imgur.com/8OiOUMT.png"
          alt="Logo"
          className="w-10 lg:w-12"
        />
      </Link>

      <button
        className="lg:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex">
          <span
            className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
              navbarOpen ? "w-0 opacity-50" : "w-6 delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>

      <nav className="lg:flex hidden">
        <Link
          href="/projects"
          className="px-4 lg:px-8 font-spaceMono text-xl text-gray-300 hover:text-gray-400 transition ease-in-out delay-100 duration-300"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="px-4 lg:px-8 font-spaceMono text-xl text-gray-300 hover:text-gray-400 transition ease-in-out delay-100 duration-300"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
