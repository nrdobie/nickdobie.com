import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBuilding, faFileContract } from "@fortawesome/sharp-regular-svg-icons";
import clsx from "clsx";
import { format } from "date-fns";

import { EmploymentType, Experience } from "~/data/experiences";

type ExperienceItemProps = Readonly<{
  experience: Experience;
  experiences: Experience[];
}>;

export default function ExperienceItem({ experience, experiences }: ExperienceItemProps) {
  let icon: IconDefinition;
  switch (experience.type) {
    default:
    case EmploymentType.DIRECT_EMPLOYEE:
      icon = faBriefcase;
      break;
    case EmploymentType.CONTRACT_AGENCY:
      icon = faBuilding;
      break;
    case EmploymentType.CONTRACTOR:
      icon = faFileContract;
      break;
  }

  const nextItemIsContract =
    experiences[experiences.findIndex((exp) => exp.id === experience.id) + 1]?.type === EmploymentType.CONTRACTOR;

  return (
    <li className="group/experience-item">
      <div className="timeline-middle">
        <div
          className={clsx(
            "mb-2 grid aspect-square w-8 place-content-center rounded-full",
            experience.type === EmploymentType.DIRECT_EMPLOYEE
              ? "bg-primary text-primary-content"
              : experience.type === EmploymentType.CONTRACT_AGENCY
                ? "bg-secondary text-secondary-content"
                : "bg-accent text-accent-content",
          )}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <div className="timeline-end pb-8 pl-2 pt-1 lg:pl-4">
        <h2 className="text-2xl">
          <span
            className={clsx(
              "font-black",
              experience.type === EmploymentType.CONTRACT_AGENCY
                ? "text-secondary"
                : experience.type === EmploymentType.CONTRACTOR
                  ? "text-accent"
                  : "text-primary",
            )}
          >
            {experience.company}
          </span>{" "}
          <span className="text-base italic opacity-60">{experience.location}</span>
        </h2>
        <p className="italic">
          <span>{experience.position}</span> &middot;{" "}
          <span>
            {format(experience.startDate, "MMM yyyy")} -{" "}
            {experience.endDate ? format(experience.endDate, "MMM yyyy") : "Currently Employed"}
          </span>
        </p>
        {experience.type !== EmploymentType.CONTRACT_AGENCY ? (
          <ul
            className="text- sm ml-4 mt-4
          list-disc lg:ml-12 lg:text-base"
          >
            {experience.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 rounded-box bg-secondary/20 p-2 text-center font-semibold text-base-content">
            Contract work listed below
          </p>
        )}
      </div>
      <hr className={clsx("group-last-of-type/experience-item:hidden", nextItemIsContract ? "bg-secondary" : null)} />
    </li>
  );
}
