import experiences from "~/data/experiences";

import ExperienceItem from "./_components/experience-item";

export default function ExperiencesPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold lg:text-4xl">Experience</h1>
      <ul className="timeline timeline-vertical timeline-compact timeline-snap-icon">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} experiences={experiences} />
        ))}
      </ul>
    </div>
  );
}
