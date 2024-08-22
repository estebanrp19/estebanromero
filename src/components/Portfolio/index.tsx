"use client"
import { IProject } from "@/interfaces";
import { ExternalLinkIcon, GithubIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Portfolio() {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/portfolio.json");
        const data: IProject[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error al cargar los proyectos del portafolio: ", error);
      }
    };

    fetchProjects();
  }, [])

  return (
    <div className="mx-10 text-[#F2F5FC]">
      <h1 className="text-[25px] text-[#A3AEC2] font-semibold text-center my-4">
        Portafolio
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-bgprimary border border-borderprimary rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-textprimary">
                {project.name}
              </h3>
              <p className="text-sm text-textsecondary mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-bgsecondary text-textsecondary text-xs rounded-full border border-borderprimary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="p-4 bg-bgsecondary">
                <div className="flex justify-between mb-3">
                  <Link
                    href={project.github}
                    className="flex items-center px-3 py-2 bg-white text-[#A3AEC2] rounded-lg hover:bg-[#A3AEC2] hover:text-white"
                    target="_blank"
                  >
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                  <Link
                    href={project.page}
                    className={`flex items-center px-3 py-2 rounded-lg ${
                      project.page
                        ? "bg-white text-[#A3AEC2] hover:bg-[#A3AEC2] hover:text-white"
                        : "bg-gray-400 text-gray-600 cursor-not-allowed"
                    }`}
                    target="_blank"
                    aria-disabled={!project.page}
                  >
                    <ExternalLinkIcon className="w-4 h-4 mr-2" />
                    Demo
                  </Link>
                </div>
                <Link
                  href={`/detail/${project.id}`}
                  className="flex items-center justify-center w-full px-3 py-2 bg-[#A3AEC2] text-white rounded-lg hover:bg-white hover:text-[#A3AEC2]"
                >
                  <InfoIcon className="w-4 h-4 mr-2" />
                  Ver Detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
