import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/sharp-regular-svg-icons";
import clsx from "clsx";
import Image from "next/image";

import { Website } from "~/data/projects";

type WebsiteOrDemoApplicationItemProps = {
  website: Website;
};

export default function WebsiteOrDemoApplicationItem({ website }: WebsiteOrDemoApplicationItemProps) {
  return (
    <div className="space-y-2 rounded-box bg-primary/10 p-4">
      <Image
        src={website.image}
        placeholder="blur"
        alt={`Screenshot of ${website.name}`}
        width={800}
        className={clsx("rounded-box border border-primary", !!website.darkModeImage && "dark:hidden")}
      />
      {website.darkModeImage ? (
        <Image
          src={website.darkModeImage}
          placeholder="blur"
          alt={`Screenshot of ${website.name}`}
          width={800}
          className="hidden rounded-box border border-primary dark:block"
        />
      ) : null}
      <h2 className="text-xl font-semibold lg:text-2xl">{website.name}</h2>
      <p className="">{website.description}</p>
      <div className="flex gap-2 max-md:flex-col max-md:items-stretch">
        <a href={website.viewUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          View this Site
        </a>
        <a href={website.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
          <FontAwesomeIcon icon={faGithub} />
          View Source on GitHub
        </a>
      </div>
    </div>
  );
}
