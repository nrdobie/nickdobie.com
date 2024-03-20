import { StaticImageData } from "next/image";

export enum Expertise {
  Beginner = 1,
  Intermediate = 2,
  Proficient = 3,
  Advanced = 4,
  Expert = 5,
}

export type Skill = {
  name: string;
  url: string;
  image: StaticImageData;
  expertise: Expertise;
  startedUsing: number;
};

const skills: Skill[] = [
  {
    name: "React.js",
    url: "https://reactjs.org",
    image: require("~/images/logos/reactjs-ar21.svg"),
    expertise: Expertise.Expert,
    startedUsing: 2015,
  },
  {
    name: "Next.js",
    url: "https://nextjs.org",
    image: require("~/images/logos/nextjs-ar21.svg"),
    expertise: Expertise.Proficient,
    startedUsing: 2021,
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: require("~/images/logos/javascript-ar21.svg"),
    expertise: Expertise.Expert,
    startedUsing: 2012,
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    image: require("~/images/logos/typescriptlang-ar21.svg"),
    expertise: Expertise.Expert,
    startedUsing: 2017,
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org",
    image: require("~/images/logos/postgresql-ar21.svg"),
    expertise: Expertise.Proficient,
    startedUsing: 2016,
  },
  {
    name: "Redis",
    url: "https://redis.io",
    image: require("~/images/logos/redis-ar21.svg"),
    expertise: Expertise.Proficient,
    startedUsing: 2017,
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    image: require("~/images/logos/tailwindcss-ar21.svg"),
    expertise: Expertise.Advanced,
    startedUsing: 2022,
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    image: require("~/images/logos/w3_css-ar21.svg"),
    expertise: Expertise.Expert,
    startedUsing: 2012,
  },
  {
    name: "GraphQL",
    url: "https://graphql.org",
    image: require("~/images/logos/graphql-ar21.svg"),
    expertise: Expertise.Advanced,
    startedUsing: 2018,
  },
  {
    name: "Docker",
    url: "https://www.docker.com",
    image: require("~/images/logos/docker-ar21.svg"),
    expertise: Expertise.Proficient,
    startedUsing: 2018,
  },
  {
    name: "Kubernetes",
    url: "https://kubernetes.io",
    image: require("~/images/logos/kubernetes-ar21.svg"),
    expertise: Expertise.Intermediate,
    startedUsing: 2018,
  },
  {
    name: "Python",
    url: "https://www.python.org",
    image: require("~/images/logos/python-ar21.svg"),
    expertise: Expertise.Beginner,
    startedUsing: 2016,
  },
];

export default skills;
