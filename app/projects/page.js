import { HiOutlineBookOpen } from "react-icons/hi";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiCsswizardry } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GiCardAceSpades } from "react-icons/gi";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
//=============================================

function page() {
  return (
    <div className="flex flex-col h-fit  pt-8 lg:pt-12 pb-8">
      <h1 className="font-spaceMono text-gray-300 text-2xl mb-8 md:text-4xl lg:text-4xl text-center lg:mb-8 animate__animated animate__fadeIn">
        Here are some of my projects
      </h1>

      <div className="block lg:grid lg:grid-cols-3 lg:justify-between lg:gap-8 md:grid md:grid-cols-2 mx-auto animate__animated animate__fadeInUp">
        <article className="text-gray-300 shadow-xl drop-shadow-lg p-6 w-80 rounded-lg mb-4 lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-105 lg:duration-300">
          <h2 className="text-3xl font-bold text-center font-spaceMono">
            Moovie
          </h2>
          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/Zgq8CEM.png"
              alt="moovie"
              className="h-24 w-24"
            />
          </div>

          <p className=" pt-4 font-spaceMono text-center">
            Moovie is a MERN stack application that allows users to create an
            account, login, and build their own custom watchlists. All movie
            data is obtained from TMDB API. JWTs used for authentication.
          </p>
          <div className="flex justify-evenly pt-4 pb-4">
            <SiMongodb className="h-8 w-8 text-green-300" />
            <SiExpress className="h-8 w-8 text-blue-300" />
            <SiReact className="h-8 w-8 text-sky-400" />
            <SiNodedotjs className="h-8 w-8 text-green-600" />
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/justinraj89/Moovie"
          >
            <div className="text-lg text-blue-300 hover:text-blue-400 font-semibold text-center">
              Github Repo
            </div>
          </a>
        </article>

        <article className="text-gray-300 shadow-xl drop-shadow-lg p-6 w-80 rounded-lg mb-4 lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-105 lg:duration-300">
          <h2 className="text-3xl font-bold text-center font-spaceMono">
            Doodle-Gram
          </h2>
          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/JoLzXnm.png"
              alt="Doodlegram"
              className="w-32"
            />
          </div>
          <p className="pt-4 font-spaceMono text-center">
            Doodle-Gram is an Instagram-type full stack CRUD application. Users
            can login using their Google account, browse a collection of posted
            artwork, add their own artwork, comment, edit and delete posts.
          </p>
          <div className="flex justify-evenly pt-4 pb-4">
            <SiNodedotjs className="h-8 w-8 text-green-600" />
            <SiExpress className="h-8 w-8 text-blue-300" />
            <SiHtml5 className="h-8 w-8 text-orange-600" />
            <SiMongodb className="h-8 w-8 text-green-300" />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/justinraj89/Doodle-Gram"
          >
            <div className="text-lg text-blue-300 hover:text-blue-400 font-semibold text-center">
              Github Repo
            </div>
          </a>
        </article>

        <article className="text-gray-300 shadow-xl drop-shadow-lg p-6 w-80 rounded-lg mb-4 lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-105 lg:duration-300">
          <h2 className="text-3xl font-bold text-center font-spaceMono">
            Dictionary
          </h2>
          <div className="flex justify-center">
            <HiOutlineBookOpen className="h-24 w-24 text-gray-300" />
          </div>
          <p className="pt-4 font-spaceMono text-center">
            Dictionary application built using Nextjs and Tailwind CSS. Word
            data is provided through 3rd party API (dictionaryapi.dev). Darkmode
            feature implemented using Next/Themes.
          </p>
          <div className="flex justify-evenly pt-4 pb-4">
            <SiNextdotjs className="h-8 w-8 text-gray-100" />
            <SiReact className="h-8 w-8 text-sky-400" />
            <SiTailwindcss className="h-8 w-8 text-teal-400" />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/justinraj89/dictionary-next13"
          >
            <div className="text-lg text-blue-300 hover:text-blue-400 font-semibold text-center">
              Github Repo
            </div>
          </a>
        </article>

        <article className="text-gray-300 shadow-xl drop-shadow-lg p-6 w-80 rounded-lg mb-4 lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-105 lg:duration-300">
          <h2 className="text-3xl font-bold text-center font-spaceMono">
            React Music Player
          </h2>
          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/R0rDbTC.png"
              alt="moovie"
              className="w-32"
            />
          </div>
          <p className="pt-4 font-spaceMono text-center">
            Fully Responsive music player built using React. In this project I
            experimented with the Styled Components package, and learned more
            about using Audio/mp3 files in an application. I enjoy making music,
            and wanted a place to put some of the songs ive created.
          </p>
          <div className="flex justify-evenly pt-4 pb-4">
            <SiStyledcomponents className="h-9 w-9 text-pink-400" />
            <SiReact className="h-8 w-8 text-sky-400" />
            <SiHtml5 className="h-8 w-8 text-orange-600" />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/justinraj89/react-music-player"
          >
            <div className="text-lg text-blue-300 hover:text-blue-400 font-semibold text-center">
              Github Repo
            </div>
          </a>
        </article>

        <article className="text-gray-300 shadow-xl drop-shadow-lg p-6 w-80 rounded-lg mb-4 lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-105 lg:duration-300">
          <h2 className="text-3xl font-bold text-center font-spaceMono">
            War
          </h2>
          <div className="flex justify-center">
            <GiCardAceSpades className="h-24 w-24 text-gray-100" />
          </div>
          <p className="pt-4 font-spaceMono text-center">
            This was my first project at General Assemblys SEI program. The Goal
            was to build a browser game of our choice. I decided to go with the
            classic card game "War". Application was built with vanilla
            Javascript, HTML, and CSS.
          </p>
          <div className="flex justify-evenly pt-4 pb-4">
            <SiJavascript className="h-8 w-8 text-yellow-300" />
            <SiCsswizardry className="h-8 w-8 text-blue-600" />
            <SiHtml5 className="h-8 w-8 text-orange-600" />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/justinraj89/War"
          >
            <div className="text-lg text-blue-300 hover:text-blue-400 font-semibold text-center">
              Github Repo
            </div>
          </a>
        </article>

        <article className="text-gray-300 shadow-xl drop-shadow-lg p-6 w-80 rounded-lg mb-4 lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-105 lg:duration-300">
          <h2 className="text-3xl font-bold text-center font-spaceMono">
            Beastcoast Memes
          </h2>
          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/cHFY8Eh.png"
              alt="moovie"
              className="w-24"
            />
          </div>
          <p className="pt-4 font-spaceMono text-center">
            This was a group project I worked on at General Assemblys SEI
            program. Our cohort was broken up into groups of 4 and were tasked
            with creating a full stack application using Python, Django, and
            PostgreSQL. My roles on This project were "Database Manager" and
            "Lead Designer". This was a great learning experience working with a
            team and using GIT.
          </p>
          <div className="flex justify-evenly pt-4 pb-4">
            <SiPython className="h-9 w-9 text-yellow-400" />
            <SiDjango className="h-8 w-8 text-emerald-800" />
            <SiPostgresql className="h-8 w-8 text-sky-500" />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/justinraj89/Beastcoast-Memes"
          >
            <div className="text-lg text-blue-300 hover:text-blue-400 font-semibold text-center">
              Github Repo
            </div>
          </a>
        </article>
      </div>
    </div>
  );
}

export default page;
