import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/sharp-regular-svg-icons";
import clsx from "clsx";
import Image from "next/image";

import { Project } from "~/data/projects";

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="space-y-2 rounded-box bg-primary/10 p-4">
      <Image
        src={project.image}
        placeholder="blur"
        alt={`Screenshot of ${project.name}`}
        width={800}
        className={clsx("rounded-box border border-primary", !!project.darkModeImage && "dark:hidden")}
      />
      {project.darkModeImage ? (
        <Image
          src={project.darkModeImage}
          placeholder="blur"
          alt={`Screenshot of ${project.name}`}
          width={800}
          className="hidden rounded-box border border-primary dark:block"
        />
      ) : null}
      <h2 className="text-xl font-semibold lg:text-2xl">{project.name}</h2>
      <p className="">{project.description}</p>
      <div className="flex gap-2 max-md:flex-col max-md:items-stretch">
        <a href={project.viewUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          View this Site
        </a>
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
          <FontAwesomeIcon icon={faGithub} />
          View Source on GitHub
        </a>
      </div>
    </div>
  );
}
