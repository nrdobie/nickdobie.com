import * as React from "react";
import Layout from "../components/Layout";
import { HeroImage } from "../components/HeroImage";
import { graphql } from "gatsby";

const NotFoundPage = ({data}) => (
  <Layout>
    <HeroImage
      title="404 Not Found"
      subtitle="...the sadness"
      image={data.file.childImageSharp.fluid.src}
      credit={{
        author: "chuttersnap",
        link: "https://unsplash.com/@chuttersnap"
      }}
    />
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundPage {
    file(relativePath: {eq: "chuttersnap-478260-unsplash.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          src
        }
      }
    }
  }
`;
