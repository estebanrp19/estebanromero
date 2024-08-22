"use client"
import { IProject } from "@/interfaces";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ProjectDetil() {
    const { id } = useParams();
    const [project, setProject] = useState<IProject | null>(null);

    useEffect(() => {
      const fetchProject = async () => {
        try {
          const response = await fetch("/portfolio.json");
          const data: IProject[] = await response.json();
          const foundProject = data.find((p) => p.id === id);
          setProject(foundProject || null);
        } catch (error) {
          console.error("Error al cargar el detalle del proyecto: ", error);
        }
      };

      fetchProject();
    }, [id]);

    if (!project) {
      return <div>Cargando...</div>;
    }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#A3AEC2]">{project.name}</h1>
          <p className="text-muted-foreground text-[#F2F5FC]">
            {project.description}
          </p>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#A3AEC2]">
              Tecnologías Usadas
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#A3AEC2] text-[#F2F5FC] rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 bg-white text-[#A3AEC2] rounded-lg hover:bg-[#A3AEC2] hover:text-white"
            >
              <GithubIcon className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href={project.page}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-3 py-2 rounded-lg ${
                project.page
                  ? "bg-white text-[#A3AEC2] hover:bg-[#A3AEC2] hover:text-white"
                  : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
              aria-disabled={!project.page}
            >
              <ExternalLinkIcon className="w-5 h-5 mr-1" />
              <span>Ver Demo</span>
            </a>
          </div>
        </div>
        <div className="order-first md:order-last">
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetil;
