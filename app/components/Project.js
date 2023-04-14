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
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
//=======================================================

function Project({
  projectName,
  logo,
  description,
  gitHubLink,
  deployLink,
  technologiesUsed,
}) {
  
  const technologyLogos = {
    MongoDB: <SiMongodb className="h-8 w-8 text-green-300" />,
    Express: <SiExpress className="h-8 w-8 text-blue-300" />,
    React: <SiReact className="h-8 w-8 text-sky-400" />,
    Node: <SiNodedotjs className="h-8 w-8 text-green-600" />,
    Next: <SiNextdotjs className="h-8 w-8 text-gray-100" />,
    Tailwind: <SiTailwindcss className="h-8 w-8 text-teal-400" />,
    HTML: <SiHtml5 className="h-8 w-8 text-orange-600" />,
    StyledComponents: <SiStyledcomponents className="h-9 w-9 text-pink-400" />,
    Javascript: <SiJavascript className="h-8 w-8 text-yellow-300" />,
    CSS: <SiCsswizardry className="h-8 w-8 text-blue-600" />,
    Python: <SiPython className="h-9 w-9 text-yellow-400" />,
    Django: <SiDjango className="h-8 w-8 text-emerald-800" />,
    PostgreSQL: <SiPostgresql className="h-8 w-8 text-sky-500" />,
  };

  return (
    <article className="text-gray-300 shadow-xl drop-shadow-lg p-6 w-80 rounded-lg mb-6 lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-[1.02] lg:duration-300">
      <a target="_blank" rel="noopener noreferrer" href={deployLink}>
      <h2 className="text-3xl font-bold text-center font-spaceMono pb-2">
        {projectName}
      </h2>
      <div className="flex justify-center">
        <img src={logo} alt={projectName} className="w-24" />
      </div>

      <p className=" pt-4 font-spaceMono text-center">{description}</p>

      <div className="flex justify-evenly pt-4 pb-4">
        {technologiesUsed.map((technology) => technologyLogos[technology])}
      </div>

      <a target="_blank" rel="noopener noreferrer" href={gitHubLink}>
        <div className="text-lg font-spaceMono text-blue-300 hover:text-blue-400 font-semibold text-center">
          Github Repo
        </div>
      </a>
      </a>
    </article>

  );
}

export default Project;
