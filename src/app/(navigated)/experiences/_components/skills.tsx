import _ from "lodash";
import Image from "next/image";

import skills, { Expertise } from "~/data/skills";

const sortedSkills = _.orderBy(skills, ["expertise", "name"], ["desc", "asc"]);

export default function Skills() {
  return (
    <div className="mb-8 flex flex-wrap gap-8">
      {sortedSkills.map((skill) => (
        <a
          key={skill.name}
          href={skill.url}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 rounded-box"
        >
          <Image src={skill.image} alt={skill.name} width={160} className="rounded-box dark:bg-white" />
          <progress className="progress progress-primary" value={skill.expertise} max={5} />
          <div className="flex w-full justify-between text-sm">
            <span>{Expertise[skill.expertise]}</span>
            {/*<span className="text-base-content/60">*/}
            {/*  {(new Date().getFullYear() - skill.startedUsing).toString()}+ years*/}
            {/*</span>*/}
          </div>
        </a>
      ))}
    </div>
  );
}
