import * as React from "react";
import { graphql } from "gatsby";
import { HeroImage } from "../components/HeroImage";
import Layout from "../components/Layout";

import { Container } from "../components/Container";
import { IllustrationBlock } from "../components/IllustrationBlock";
import { Section } from "../components/Section";

interface IIndexPageTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageCredit: any;
  about: {
    title: string
    text: string
    illustration: {
      publicURL: string
    }
  }
}

export const IndexPageTemplate: React.SFC<IIndexPageTemplateProps> = ({
  title,
  subtitle,
  heroImage,
  heroImageCredit,
  about
}) => (
  <React.Fragment>
    <HeroImage
      title={title}
      image={heroImage}
      subtitle={subtitle}
      credit={heroImageCredit}
    />
    <Section>
      <IllustrationBlock title={about.title} text={about.text} illustration={about.illustration.publicURL} side="right" />
    </Section>
    <Section theme="primary">
      <Container>
        <h2>My Best Skills</h2>
      </Container>
    </Section>
    <Section>
      <Container>
        <h2>My Projects</h2>
      </Container>
    </Section>
    <Section theme="secondary">
      <Container>
        <h2>Contact Me</h2>
      </Container>
    </Section>
    <Section theme="dark">
      <Container>
        <h2>footer</h2>
      </Container>
    </Section>
  </React.Fragment>
);

export const IndexPage: React.SFC<{ data: any }> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        {...frontmatter}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        heroImageCredit {
          author
          link
        }
        heroImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              src
            }
          }
        }
        about {
          title
          text
          illustration {
            publicURL
          }
        }
        highlights {
          title
          text
          illustration {
            publicURL
          }
        }
      }
    }
  }
`;
