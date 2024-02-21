export enum EmploymentType {
  DIRECT_EMPLOYEE,
  CONTRACTOR,
  CONTRACT_AGENCY,
}

export type Experience = {
  id: string;
  type: EmploymentType;
  company: string;
  position: string;
  location: string;
  startDate: Date;
  endDate: Date;
} & (
  | {
      type: EmploymentType.CONTRACT_AGENCY;
    }
  | {
      type: EmploymentType.CONTRACTOR;
      contractAgencyId: string;
      highlights: string[];
    }
  | {
      type: EmploymentType.DIRECT_EMPLOYEE;
      highlights: string[];
    }
);

const experiences: Experience[] = [
  {
    id: "prewitt-ridge",
    type: EmploymentType.DIRECT_EMPLOYEE,
    company: "Prewitt Ridge",
    position: "Senior Software Engineer",
    location: "Los Angeles, CA",
    startDate: new Date("2021-06"),
    endDate: new Date("2024-02"),
    highlights: [
      "Implemented a React frontend using TypeScript within a monorepo architecture, facilitating the seamless development of additional microservices and platform integrations through shared code utilization.",
      "Drafted the specifications and established best practices for converting an existing RESTful API to a GraphQL API, overseeing the transition with a team of engineers.",
      "Set React coding standards and provided mentorship to several engineers on crafting efficient React code, thereby boosting team expertise and improving code quality.",
      "Collaborated with leadership to translate business requirements into actionable tasks for developers, ensuring deliverables remained realistic and achievable.",
    ],
  },
  {
    id: "target",
    type: EmploymentType.DIRECT_EMPLOYEE,
    company: "Target",
    position: "Senior Software Engineer",
    location: "Minneapolis, MN",
    startDate: new Date("2017-06"),
    endDate: new Date("2021-06"),
    highlights: [
      "Designed and executed an application to optimize the design and development process of physical products, leveraging React and GraphQL for streamlined operations.",
      "Engineered a library to facilitate large file transfers with resume capability, significantly improving collaboration with international partners facing unstable internet connections.",
      "Created and implemented an Electron-based framework for POS systems, achieving remarkable increases in system uptime and enabling updates without downtime.",
      "Established React best practices and mentored multiple engineers on writing efficient React code, enhancing team proficiency and code quality.",
      "Led the creation of a UX design system that became the adopted standard for user experience across all internal applications company-wide.",
    ],
  },
  {
    id: "leadpages",
    type: EmploymentType.DIRECT_EMPLOYEE,
    company: "Leadpages",
    position: "Engineer",
    location: "Minneapolis, MN",
    startDate: new Date("2015-06"),
    endDate: new Date("2017-06"),
    highlights: [
      "Engineered drag-and-drop functionality for a page builder leveraging Aurelia framework.",
      "Managed and enhanced a Python-based API for robust backend support.",
      "Designed and implemented end-to-end (E2E) and unit testing across multiple programming languages.",
      "Led the architectural design and supported the migration from Aurelia to React, due to improved adoption of React.",
      "Conducted React training sessions for developers, enhancing team proficiency in modern web development techniques.",
    ],
  },
  {
    id: "robert-half-technology",
    type: EmploymentType.CONTRACT_AGENCY,
    company: "Robert Half Technology",
    position: "Salaried Professional",
    location: "Minneapolis, MN",
    startDate: new Date("2015-03"),
    endDate: new Date("2016-05"),
  },
  {
    id: "the-lacek-group",
    type: EmploymentType.CONTRACTOR,
    contractAgencyId: "robert-half-technology",
    company: "The Lacek Group",
    position: "Contract Application Developer",
    location: "Minneapolis, MN",
    startDate: new Date("2016-03"),
    endDate: new Date("2016-05"),
    highlights: [
      "Developed an Adobe Campaign preview engine with PHP and JavaScript, enabling marketers to rapidly validate their campaigns.",
      "Oversaw the maintenance of a member rewards application.",
      "Designed and implemented an API to facilitate external access.",
    ],
  },
  {
    id: "airvuz",
    type: EmploymentType.CONTRACTOR,
    contractAgencyId: "robert-half-technology",
    company: "AirVūz",
    position: "Contract MEAN Stack Developer",
    location: "Minneapolis, MN",
    startDate: new Date("2016-01"),
    endDate: new Date("2016-03"),
    highlights: [
      "Contributed to troubleshooting and enhancing a video sharing platform, leveraging the MEAN stack (MongoDB, Express, Angular, Node.js).",
      "Led the redesign of the platform's front-end, incorporating Node.js, webpack, React, Redux, and PostCSS, with a focus on server-side rendering capabilities.",
      "Educated team members on developing applications using React and Redux.",
      "Developed a comprehensive testing framework utilizing Jasmine, Karma, and Cucumber.js.",
    ],
  },
  {
    id: "bi-worldwide",
    type: EmploymentType.CONTRACTOR,
    contractAgencyId: "robert-half-technology",
    company: "BI Worldwide",
    position: "Contract Frontend Developer",
    location: "Bloomington, MN",
    startDate: new Date("2015-03"),
    endDate: new Date("2016-01"),
    highlights: [
      "Designed the front-end architecture for a React web application, incorporating webpack and Babel for efficient development.",
      "Built a fully responsive React application for showcasing metrics and resources across various devices.",
      "Created a single-page Ajax application using Backbone.js, tailored to display metrics and company news on iPads and large touch-enabled TVs.",
      "Conducted updates and troubleshooting for various BI Worldwide applications.",
    ],
  },
  {
    id: "gustavus-adolphus-college",
    type: EmploymentType.DIRECT_EMPLOYEE,
    company: "Gustavus Adolphus College",
    position: "Web Developer",
    location: "St. Peter, MN",
    startDate: new Date("2013-01"),
    endDate: new Date("2015-02"),
    highlights: [
      "Collaborated with multiple campus organizations to enhance their web presence through content creation and custom applications.",
      "Implemented integrations to aggregate content from various social media platforms, including Twitter, Facebook, and Instagram.",
      "Engineered new user interface components for the overarching site theme.",
    ],
  },
  {
    id: "marketron-broadcast-solutions",
    type: EmploymentType.DIRECT_EMPLOYEE,
    company: "Marketron Broadcast Solutions",
    position: "Web Developer",
    location: "Hailey, ID",
    startDate: new Date("2012-03"),
    endDate: new Date("2013-01"),
    highlights: [
      "Created a testing framework specifically for integration testing within a media management program, aiming to minimize errors and reduce system downtime.",
      "Upgraded Marketron Mobile from Rails 1.2 to 2.3, enabling access to newer, more efficient software technologies, thereby reducing operational costs and enhancing the client experience.",
      "Revamped the backend of Marketron Mobile to incorporate Backbone.js, which enhanced the user interface and ensured a more consistent design across Marketron products.",
    ],
  },
];

export default experiences;
