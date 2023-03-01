'use client'
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";




function Footer() {
  return (
    <div className="h-64 justify-center items-center flex flex-col">

        <div className="flex justify-center" id="contact">
          <a
            href="https://github.com/justinraj89" target='_blank' rel="noopener noreferrer"
            className="px-8 text-gray-100 lg:transition lg:ease-in-out lg:delay-150 hover:text-green-300 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300"
          >
            <FaGithub className="h-12 w-12" />
          </a>
          <button
            onClick={() => window.location = 'mailto:rajewskijustin@gmail.com'}
            className="px-8 text-gray-100 lg:transition lg:ease-in-out lg:delay-150 hover:text-green-300 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300"
          >
            <MdOutlineMailOutline className="h-12 w-12" />
          </button>
          <a
            href="https://www.linkedin.com/in/justinrajewski89/" target='_blank' rel="noopener noreferrer"
            className="px-8 text-gray-100 lg:transition lg:ease-in-out lg:delay-150 hover:text-green-300  lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300"
          >
            <RxLinkedinLogo className="h-12 w-12" />
          </a>
        </div>
    </div>
  )
}

export default Footer