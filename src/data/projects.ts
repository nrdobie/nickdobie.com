import { StaticImageData } from "next/image";
import dedent from "ts-dedent";

import NickDobieComDarkModeScreenshot from "~/images/nickdobie-com-dark.png";
import NickDobieComScreenshot from "~/images/nickdobie-com.png";
import PurpleMortgageDarkModeScreenshot from "~/images/purple-mortgage-dark.png";
import PurpleMortgageScreenshot from "~/images/purple-mortgage.png";

export enum ProjectType {
  WEBSITE,
  DEMO_APPLICATION,
  NPM_LIBRARY,
}

export type Website = {
  type: ProjectType.WEBSITE | ProjectType.DEMO_APPLICATION;
  id: string;
  name: string;
  description: string;
  image: StaticImageData;
  darkModeImage?: StaticImageData;
  viewUrl: string;
  githubUrl: string;
};

export type NpmLibrary = {
  type: ProjectType.NPM_LIBRARY;
  id: string;
  name: string;
  description: string;
  npmPackageName: string;
  githubUrl: string;
};

export type Project = Website | NpmLibrary;

export const projects: Project[] = [
  {
    id: "nickdobie-com",
    type: ProjectType.WEBSITE,
    name: "Nick Dobie",
    description: "This is my personal site (you are already here).",
    image: NickDobieComScreenshot,
    darkModeImage: NickDobieComDarkModeScreenshot,
    viewUrl: "https://www.nickdobie.com",
    githubUrl: "https://github.com/nrdobie/nickdobie.com",
  },
  {
    id: "purple-mortgage",
    type: ProjectType.DEMO_APPLICATION,
    name: "Purple Mortgage",
    description: dedent`
      This is a demo site for a fictional mortgage company. It was built to showcase my skills in web development. 
      It is built with Next.js, TypeScript, and Tailwind CSS with hosting provided by Vercel. A key aspect was 
      improving the performance of the site by using modern web development techniques such as code splitting and 
      image optimization.    
    `,
    image: PurpleMortgageScreenshot,
    darkModeImage: PurpleMortgageDarkModeScreenshot,
    viewUrl: "https://purplemortgage.nickdobie.com",
    githubUrl: "https://github.com/nrdobie/purple-mortgage-demo",
  },
  {
    id: "prisma-extension-cuid2",
    type: ProjectType.NPM_LIBRARY,
    name: "prisma-extension-cuid2",
    description: dedent`
      This is a Prisma extension allows for the use of the new CUID2 id generation algorithm in Prisma as a stopgap
      until Prisma supports it natively.
    `,
    npmPackageName: "prisma-extension-cuid2",
    githubUrl: "https://github.com/nrdobie/prisma-extension-cuid2",
  },
];

export default projects;
