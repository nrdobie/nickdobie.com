import * as React from "react";
import { graphql } from "gatsby";
import { HeroImage } from "../components/HeroImage";
import Layout from "../components/Layout";

import { Container } from "../components/Container";
import { IllustrationBlock } from "../components/IllustrationBlock";
import { Section } from "../components/Section";
import { GridList } from "../components/GridList";

interface IIndexPageTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageCredit: any;
  about: {
    title: string;
    text: string;
    illustration: {
      publicURL: string;
    };
  };
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
      <IllustrationBlock
        title={about.title}
        text={about.text}
        illustration={about.illustration.publicURL}
        side="right"
      />
    </Section>
    <Section theme="primary">
      <Container>
        <h2>My Best Skills</h2>
        <GridList>
          <GridList.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat
    purus nec vehicula pharetra. Quisque purus nisl, iaculis a ante at, pretium
    fringilla sem. Pellentesque scelerisque nisl id ipsum consectetur, vitae
    eleifend odio tempus. Aenean viverra rutrum viverra. Pellentesque facilisis
    faucibus lectus. Sed fringilla nibh nec nulla malesuada semper. Donec a
    lectus molestie, mollis quam vitae, vulputate metus. Ut pulvinar eros vitae
    eros suscipit, nec ultrices nisl tempus. Nulla pharetra finibus arcu, et
    aliquam nisi. Nulla venenatis, quam eu venenatis tempor, magna libero
    tincidunt nunc, a suscipit enim ligula gravida dui. Nam in ligula vitae ante
    vehicula facilisis sit amet sed arcu. Etiam sit amet lacus vitae sapien
    tempor egestas rhoncus in nisl. Phasellus sagittis lacus sed est placerat,
    quis ornare velit fermentum. Vestibulum sit amet pulvinar nulla. Nunc in
    nulla at nunc pharetra suscipit eu ac mauris. </GridList.Item>
          <GridList.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat
    purus nec vehicula pharetra. Quisque purus nisl, iaculis a ante at, pretium
    fringilla sem. Pellentesque scelerisque nisl id ipsum consectetur, vitae
    eleifend odio tempus. Aenean viverra rutrum viverra. Pellentesque facilisis
    faucibus lectus. Sed fringilla nibh nec nulla malesuada semper. Donec a
    lectus molestie, mollis quam vitae, vulputate metus. Ut pulvinar eros vitae
    eros suscipit, nec ultrices nisl tempus. Nulla pharetra finibus arcu, et
    aliquam nisi. Nulla venenatis, quam eu venenatis tempor, magna libero
    tincidunt nunc, a suscipit enim ligula gravida dui. Nam in ligula vitae ante
    vehicula facilisis sit amet sed arcu. Etiam sit amet lacus vitae sapien
    tempor egestas rhoncus in nisl. Phasellus sagittis lacus sed est placerat,
    quis ornare velit fermentum. Vestibulum sit amet pulvinar nulla. Nunc in
    nulla at nunc pharetra suscipit eu ac mauris. </GridList.Item>
          <GridList.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat
    purus nec vehicula pharetra. Quisque purus nisl, iaculis a ante at, pretium
    fringilla sem. Pellentesque scelerisque nisl id ipsum consectetur, vitae
    eleifend odio tempus. Aenean viverra rutrum viverra. Pellentesque facilisis
    faucibus lectus. Sed fringilla nibh nec nulla malesuada semper. Donec a
    lectus molestie, mollis quam vitae, vulputate metus. Ut pulvinar eros vitae
    eros suscipit, nec ultrices nisl tempus. Nulla pharetra finibus arcu, et
    aliquam nisi. Nulla venenatis, quam eu venenatis tempor, magna libero
    tincidunt nunc, a suscipit enim ligula gravida dui. Nam in ligula vitae ante
    vehicula facilisis sit amet sed arcu. Etiam sit amet lacus vitae sapien
    tempor egestas rhoncus in nisl. Phasellus sagittis lacus sed est placerat,
    quis ornare velit fermentum. Vestibulum sit amet pulvinar nulla. Nunc in
    nulla at nunc pharetra suscipit eu ac mauris. </GridList.Item>
          <GridList.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat
    purus nec vehicula pharetra. Quisque purus nisl, iaculis a ante at, pretium
    fringilla sem. Pellentesque scelerisque nisl id ipsum consectetur, vitae
    eleifend odio tempus. Aenean viverra rutrum viverra. Pellentesque facilisis
    faucibus lectus. Sed fringilla nibh nec nulla malesuada semper. Donec a
    lectus molestie, mollis quam vitae, vulputate metus. Ut pulvinar eros vitae
    eros suscipit, nec ultrices nisl tempus. Nulla pharetra finibus arcu, et
    aliquam nisi. Nulla venenatis, quam eu venenatis tempor, magna libero
    tincidunt nunc, a suscipit enim ligula gravida dui. Nam in ligula vitae ante
    vehicula facilisis sit amet sed arcu. Etiam sit amet lacus vitae sapien
    tempor egestas rhoncus in nisl. Phasellus sagittis lacus sed est placerat,
    quis ornare velit fermentum. Vestibulum sit amet pulvinar nulla. Nunc in
    nulla at nunc pharetra suscipit eu ac mauris. </GridList.Item>
          <GridList.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat
    purus nec vehicula pharetra. Quisque purus nisl, iaculis a ante at, pretium
    fringilla sem. Pellentesque scelerisque nisl id ipsum consectetur, vitae
    eleifend odio tempus. Aenean viverra rutrum viverra. Pellentesque facilisis
    faucibus lectus. Sed fringilla nibh nec nulla malesuada semper. Donec a
    lectus molestie, mollis quam vitae, vulputate metus. Ut pulvinar eros vitae
    eros suscipit, nec ultrices nisl tempus. Nulla pharetra finibus arcu, et
    aliquam nisi. Nulla venenatis, quam eu venenatis tempor, magna libero
    tincidunt nunc, a suscipit enim ligula gravida dui. Nam in ligula vitae ante
    vehicula facilisis sit amet sed arcu. Etiam sit amet lacus vitae sapien
    tempor egestas rhoncus in nisl. Phasellus sagittis lacus sed est placerat,
    quis ornare velit fermentum. Vestibulum sit amet pulvinar nulla. Nunc in
    nulla at nunc pharetra suscipit eu ac mauris. </GridList.Item>
          <GridList.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat
    purus nec vehicula pharetra. Quisque purus nisl, iaculis a ante at, pretium
    fringilla sem. Pellentesque scelerisque nisl id ipsum consectetur, vitae
    eleifend odio tempus. Aenean viverra rutrum viverra. Pellentesque facilisis
    faucibus lectus. Sed fringilla nibh nec nulla malesuada semper. Donec a
    lectus molestie, mollis quam vitae, vulputate metus. Ut pulvinar eros vitae
    eros suscipit, nec ultrices nisl tempus. Nulla pharetra finibus arcu, et
    aliquam nisi. Nulla venenatis, quam eu venenatis tempor, magna libero
    tincidunt nunc, a suscipit enim ligula gravida dui. Nam in ligula vitae ante
    vehicula facilisis sit amet sed arcu. Etiam sit amet lacus vitae sapien
    tempor egestas rhoncus in nisl. Phasellus sagittis lacus sed est placerat,
    quis ornare velit fermentum. Vestibulum sit amet pulvinar nulla. Nunc in
    nulla at nunc pharetra suscipit eu ac mauris. </GridList.Item>
          <GridList.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat
    purus nec vehicula pharetra. Quisque purus nisl, iaculis a ante at, pretium
    fringilla sem. Pellentesque scelerisque nisl id ipsum consectetur, vitae
    eleifend odio tempus. Aenean viverra rutrum viverra. Pellentesque facilisis
    faucibus lectus. Sed fringilla nibh nec nulla malesuada semper. Donec a
    lectus molestie, mollis quam vitae, vulputate metus. Ut pulvinar eros vitae
    eros suscipit, nec ultrices nisl tempus. Nulla pharetra finibus arcu, et
    aliquam nisi. Nulla venenatis, quam eu venenatis tempor, magna libero
    tincidunt nunc, a suscipit enim ligula gravida dui. Nam in ligula vitae ante
    vehicula facilisis sit amet sed arcu. Etiam sit amet lacus vitae sapien
    tempor egestas rhoncus in nisl. Phasellus sagittis lacus sed est placerat,
    quis ornare velit fermentum. Vestibulum sit amet pulvinar nulla. Nunc in
    nulla at nunc pharetra suscipit eu ac mauris. </GridList.Item>
          <GridList.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat
    purus nec vehicula pharetra. Quisque purus nisl, iaculis a ante at, pretium
    fringilla sem. Pellentesque scelerisque nisl id ipsum consectetur, vitae
    eleifend odio tempus. Aenean viverra rutrum viverra. Pellentesque facilisis
    faucibus lectus. Sed fringilla nibh nec nulla malesuada semper. Donec a
    lectus molestie, mollis quam vitae, vulputate metus. Ut pulvinar eros vitae
    eros suscipit, nec ultrices nisl tempus. Nulla pharetra finibus arcu, et
    aliquam nisi. Nulla venenatis, quam eu venenatis tempor, magna libero
    tincidunt nunc, a suscipit enim ligula gravida dui. Nam in ligula vitae ante
    vehicula facilisis sit amet sed arcu. Etiam sit amet lacus vitae sapien
    tempor egestas rhoncus in nisl. Phasellus sagittis lacus sed est placerat,
    quis ornare velit fermentum. Vestibulum sit amet pulvinar nulla. Nunc in
    nulla at nunc pharetra suscipit eu ac mauris. </GridList.Item>
          <GridList.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat
    purus nec vehicula pharetra. Quisque purus nisl, iaculis a ante at, pretium
    fringilla sem. Pellentesque scelerisque nisl id ipsum consectetur, vitae
    eleifend odio tempus. Aenean viverra rutrum viverra. Pellentesque facilisis
    faucibus lectus. Sed fringilla nibh nec nulla malesuada semper. Donec a
    lectus molestie, mollis quam vitae, vulputate metus. Ut pulvinar eros vitae
    eros suscipit, nec ultrices nisl tempus. Nulla pharetra finibus arcu, et
    aliquam nisi. Nulla venenatis, quam eu venenatis tempor, magna libero
    tincidunt nunc, a suscipit enim ligula gravida dui. Nam in ligula vitae ante
    vehicula facilisis sit amet sed arcu. Etiam sit amet lacus vitae sapien
    tempor egestas rhoncus in nisl. Phasellus sagittis lacus sed est placerat,
    quis ornare velit fermentum. Vestibulum sit amet pulvinar nulla. Nunc in
    nulla at nunc pharetra suscipit eu ac mauris. </GridList.Item>
        </GridList>
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
            fluid(
              maxWidth: 2048
              quality: 100
            ) {
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
