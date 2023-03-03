"use client";
import Link from "next/link";
//==================================================

function Nav() {

  return (
    <div className="sticky top-0 z-10 backdrop-blur border-b-2 border-zinc-800 h-16 flex justify-center md:justify-between lg:justify-between items-center">
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
      <nav className="flex">
        <Link
          href="/projects"
          className="px-4 lg:px-8 font-spaceMono text-xl text-gray-300 hover:text-gray-400 transition ease-in-out delay-100 hover:scale-105 duration-300"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="px-4 lg:px-8 font-spaceMono text-xl text-gray-300 hover:text-gray-400 transition ease-in-out delay-100 hover:scale-105 duration-300"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
