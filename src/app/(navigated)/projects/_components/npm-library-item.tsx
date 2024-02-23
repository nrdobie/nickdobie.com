import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxTaped } from "@fortawesome/sharp-regular-svg-icons";

import { NpmLibrary } from "~/data/projects";

type NpmLibraryItemProps = {
  npmLibrary: NpmLibrary;
};

export default function NpmLibraryItem({ npmLibrary }: NpmLibraryItemProps) {
  return (
    <div className="space-y-2 rounded-box bg-primary/10 p-4">
      <h2 className="flex items-center gap-2 text-xl font-semibold lg:text-2xl">
        <FontAwesomeIcon icon={faBoxTaped} size="xl" />
        {npmLibrary.name}
      </h2>
      <p className="flex items-center gap-2">
        <img
          src={`https://img.shields.io/npm/v/${npmLibrary.npmPackageName}.svg?style=flat`}
          alt={`npm version of ${npmLibrary.name}`}
        />
        <img
          src={`https://img.shields.io/npm/dt/${npmLibrary.npmPackageName}.svg?style=flat`}
          alt={`npm downloads of ${npmLibrary.name}`}
        />
        <img
          src={`https://img.shields.io/npm/l/${npmLibrary.npmPackageName}.svg?style=flat`}
          alt={`license of ${npmLibrary.name}`}
        />
        <img
          src={`https://img.shields.io/npm/types/${npmLibrary.npmPackageName}.svg?style=flat`}
          alt={`types of ${npmLibrary.name}`}
        />
      </p>
      <p className="">{npmLibrary.description}</p>
      <div className="flex gap-2 max-md:flex-col max-md:items-stretch">
        <a
          href={`https://www.npmjs.com/package/${npmLibrary.npmPackageName}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <FontAwesomeIcon icon={faNpm} />
          View on npm
        </a>
        <a href={npmLibrary.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
          <FontAwesomeIcon icon={faGithub} />
          View Source on GitHub
        </a>
      </div>
    </div>
  );
}
