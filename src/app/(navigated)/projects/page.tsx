import NpmLibraryItem from "~/app/(navigated)/projects/_components/npm-library-item";
import projects, { ProjectType } from "~/data/projects";

import WebsiteOrDemoApplicationItem from "./_components/website-or-demo-application-item";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold lg:text-4xl">Projects</h1>
      <p className="text-lg italic">
        These are some example projects that I have worked on that are publicly available and that you can view the
        source code for.
      </p>
      {projects.map((project) => {
        if (project.type === ProjectType.WEBSITE || project.type === ProjectType.DEMO_APPLICATION) {
          return <WebsiteOrDemoApplicationItem key={project.id} website={project} />;
        } else if (project.type === ProjectType.NPM_LIBRARY) {
          return <NpmLibraryItem key={project.id} npmLibrary={project} />;
        }
      })}
    </div>
  );
}
