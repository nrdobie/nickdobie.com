import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Section } from "../Section";
import { Container } from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAndroidAlt,
  faMapMarkerAlt,
  faAt
} from "@fortawesome/pro-solid-svg-icons";
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";

export const Footer: React.SFC = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contactsYaml {
        accounts {
          account
          type
        }
      }
    }
  `);

  return (
    <Section theme='dark'>
      <Container>
        <h3>Nicholas Dobie</h3>
        <ul>
          {data.contactsYaml.accounts.map(account => (
            <li key={`${account.type}_${account.account}`}>
              <SocialIcon type={account.type} /> <SocialLink {...account} />
            </li>
          ))}
        </ul>
        {data.contactsYaml.accounts.map(account => (
          <SocialButton key={`button_${account.type}_${account.account}`} {...account} />
        ))}
      </Container>
    </Section>
  );
};

const SocialIcon: React.SFC<{ type: string }> = ({ type }) => {
  switch (type) {
    case "email":
      return <FontAwesomeIcon fixedWidth icon={faAt} />;
    case "phone":
      return <FontAwesomeIcon fixedWidth icon={faMobileAndroidAlt} />;
    case "github":
      return <FontAwesomeIcon fixedWidth icon={faGithub} />;
    case "codepen":
      return <FontAwesomeIcon fixedWidth icon={faCodepen} />;
    case "location":
      return <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />;
  }
};

const SocialLink: React.SFC<{ type: string; account: string }> = ({
  type,
  account
}) => {
  switch (type) {
    case "email":
      return <a target="_blank" href={`mailto:${account}`}>{account}</a>;
    case "phone":
      return <a target="_blank" href={`tel:${account.replace(/[^\d\+]/g, "")}`}>{account}</a>;
    case "github":
      return <a target="_blank" href={`https://github.com/${account}`}>github.com/{account}</a>;
    case "codepen":
      return <a target="_blank" href={`https://codepen.io/${account}`}>codepen.io/{account}</a>;
    default:
      return <span>{account}</span>;
  }
};

const SocialButton: React.SFC<{ type: string; account: string }> = ({
  type,
  account
}) => {
  switch (type) {
    case "email":
      return (
        <a target="_blank" className="no-style" href={`mailto:${account}`} title={`${account}`}>
          <SocialIcon type="email" />
        </a>
      );
    case "phone":
      return (
        <a target="_blank" className="no-style" href={`tel:${account.replace(/[^\d\+]/g, "")}`} title={`${account}`}>
          <SocialIcon type="phone" />
        </a>
      );
    case "github":
      return (
        <a target="_blank" className="no-style"
          href={`https://github.com/${account}`}
          title={`github.com/${account}`}
        >
          <SocialIcon type="github" />
        </a>
      );
    case "codepen":
      return (
        <a target="_blank" className="no-style"
          href={`https://codepen.io/${account}`}
          title={`codepen.io/${account}`}
        >
          <SocialIcon type="codepen" />
        </a>
      );
    default:
      return null;
  }
};
