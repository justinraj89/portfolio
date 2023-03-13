import Link from "next/link";

function MenuOverlay({ navbarOpen, setNavbarOpen }) {
  return (
    <nav
      className={`fixed w-full px-10 z-10 h-screen pt-24 bg-zinc-900 transform delay-100 transition-all duration-500 ${
        navbarOpen ? "opacity-95 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <ul className="w-full flex justify-center flex-col gap-4">
        <li className="flex justify-center w-fit self-center leading-8 focus:outline-none py-2 transition-all duration-200 ease-in-out bg-black px-4 rounded-lg">
          <Link
            href="/"
            className="h-full w-full py-2 text-4xl font-spaceMono text-gray-300 hover:text-green-300"
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            home
          </Link>
        </li>
        <li className="flex justify-center w-fit self-center leading-8 focus:outline-none py-2 transition-all duration-200 ease-in-out  bg-black px-4 rounded-lg">
          <Link
            href="/projects"
            className="h-full w-full py-2 text-4xl font-spaceMono text-gray-300 hover:text-green-300"
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            projects
          </Link>
        </li>
        <li className="flex justify-center w-fit self-center leading-8 focus:outline-none py-2 transition-all duration-200 ease-in-out  bg-black px-4 rounded-lg">
          <Link
            href="/contact"
            className="h-full w-full py-2 text-4xl font-spaceMono text-gray-300 hover:text-green-300"
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuOverlay;
