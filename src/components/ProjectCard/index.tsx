import { FaEye, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    skills: string[];
    githubLink: string;
    projectLink: string;
}

function ProjectCard({ title, description, image, skills, githubLink, projectLink }: ProjectCardProps) {
    return (
        <div className="w-[320px] flex flex-col items-start rounded-lg bg-zinc-900/30 border border-sky-400">
          <img src={image} className="w-full h-52 aspect-video object-cover rounded-t-lg"/>

          <div className="w-full p-4 flex flex-col gap-5 rounded-b-lg">
            <h2 className="text-sky-400 text-xl font-medium">{title}</h2>

            <p>{description}</p>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span className="bg-sky-400 font-medium px-2 rounded-xl">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-5">

              <a href={githubLink} className="bg-sky-400 px-2 py-1 text-white font-medium flex items-center justify-center gap-2 rounded-lg cursor-pointer transition-all hover:scale-110 hover:bg-sky-300">
                <FaGithub />
                Ver código
              </a>

              <a href={projectLink} className="bg-sky-400 px-2 py-1 text-white font-medium flex items-center justify-center gap-2 rounded-lg cursor-pointer transition-all hover:scale-110 hover:bg-sky-300">
                <FaEye />
                Ver projeto
              </a>

            </div> 

          </div> {/* Fim descrição do card */}
        </div> // Fim do card
    )
}

export default ProjectCard