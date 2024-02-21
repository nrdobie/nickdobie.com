import { StaticImageData } from "next/image";
import dedent from "ts-dedent";

import NickDobieComDarkModeScreenshot from "~/images/nickdobie-com-dark.png";
import NickDobieComScreenshot from "~/images/nickdobie-com.png";
import PurpleMortgageDarkModeScreenshot from "~/images/purple-mortgage-dark.png";
import PurpleMortgageScreenshot from "~/images/purple-mortgage.png";

export type Project = {
  id: string;
  name: string;
  description: string;
  image: StaticImageData;
  darkModeImage?: StaticImageData;
  viewUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "nickdobie-com",
    name: "Nick Dobie",
    description: "This is my personal site (you are already here).",
    image: NickDobieComScreenshot,
    darkModeImage: NickDobieComDarkModeScreenshot,
    viewUrl: "https://www.nickdobie.com",
    githubUrl: "https://github.com/nrdobie/nickdobie.com",
  },
  {
    id: "purple-mortgage",
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
];

export default projects;
