import { Icon } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/sharp-regular-svg-icons";

export interface SocialMediaAccount {
  name: string;
  link: string;
  brandIcon: Icon;
}

export const socialMediaAccounts = [
  {
    name: "nick@dobie.me",
    link: "mailto:nick@dobie.me",
    brandIcon: faAt,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nickdobie/",
    brandIcon: faLinkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/nrdobie",
    brandIcon: faGithub,
  },
];
