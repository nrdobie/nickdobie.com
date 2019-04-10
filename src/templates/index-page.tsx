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
  </React.Fragment>
);

export const IndexPage: React.SFC<{ data: any }> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heroImage={frontmatter.heroImage}
        subtitle={frontmatter.subtitle}
        heroImageCredit={frontmatter.heroImageCredit}
        about={frontmatter.about}
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
              ...GatsbyImageSharpFluid
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
      }
    }
  }
`;
