import * as React from "react";
import { graphql } from "gatsby";
import { HeroImage } from "../components/HeroImage";
import Layout from "../components/Layout";

import { Container } from "../components/Container";
import { IllustrationBlock } from "../components/IllustrationBlock";
import { Section } from "../components/Section";
import { GridList } from "../components/GridList";
import { illustrations } from "../illustrations";
import { IconBlock } from "../components/IconBlock";

interface IIndexPageTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageCredit: any;
  about: {
    title: string;
    text: string;
    illustration: string;
  };
  highlights: {
    title: string;
    items: Array<{
      title: string;
      text: string;
      illustration: string;
    }>;
  };
}

export const IndexPageTemplate: React.SFC<IIndexPageTemplateProps> = ({
  title,
  subtitle,
  heroImage,
  heroImageCredit,
  about,
  highlights
}) => (
  <React.Fragment>
    <HeroImage
      title={title}
      image={heroImage}
      subtitle={subtitle}
      credit={heroImageCredit}
    />
    <Section>
      <IllustrationBlock
        title={about.title}
        text={about.text}
        illustration={about.illustration}
        side="right"
      />
    </Section>
    <Section theme="primary">
      <Container>
        <h2>{highlights.title}</h2>
        <GridList>
          {highlights.items.map((highlight, index) => (
            <GridList.Item key={`highlight_${index}`}>
              <IconBlock {...highlight} />
            </GridList.Item>
          ))}
        </GridList>
      </Container>
    </Section>
    <Section>
      <Container>
        <h2>&lt;contact-me&gt;</h2>
      </Container>
    </Section>
  </React.Fragment>
);

export const IndexPage: React.SFC<{ data: any }> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate {...frontmatter} />
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
          illustration
        }
        highlights {
          title
          items {
            title
            text
            illustration
          }
        }
      }
    }
  }
`;
