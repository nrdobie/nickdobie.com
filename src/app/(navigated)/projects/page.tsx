import projects from "~/data/projects";

import ProjectItem from "./_components/project-item";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold lg:text-4xl">Projects</h1>
      <p className="text-lg italic">
        These are some example projects that I have worked on that are publicly available and that you can view the
        source code for.
      </p>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}
