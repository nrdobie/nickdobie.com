import experiences from "~/data/experiences";

import ExperienceItem from "./_components/experience-item";
import Skills from "./_components/skills";

export default function ExperiencesPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold lg:text-4xl">Experience</h1>
      <h2 className="mb-4 text-lg font-semibold lg:text-2xl">Skills</h2>
      <Skills />
      <h2 className="mb-4 text-lg font-semibold lg:text-2xl">Work Experience</h2>
      <ul className="timeline timeline-vertical timeline-compact timeline-snap-icon">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} experiences={experiences} />
        ))}
      </ul>
    </div>
  );
}
