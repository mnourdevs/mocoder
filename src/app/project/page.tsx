import { Metadata } from "next";
import { ProjectCard } from "@/components/card";
import { data } from "@/utils/constants/data";
export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="tracking-widest text-center mb-4 text-gray-500 font-bold">
        Latest Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:ml-3">
        {data.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <p className="tracking-widest text-center mb-4 text-gray-500 font-bold my-5">
        Team Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:ml-3">
        {data.teamProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
