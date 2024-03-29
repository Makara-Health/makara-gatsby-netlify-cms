import React from "react";
import PropTypes from "prop-types";
import {Link, graphql} from "gatsby";
import {getImage} from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import TeamRoll from "../components/TeamRoll";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
                                      image,
                                      title,
                                      heading,
                                      subheading,
                                      mainpitch,
                                      description,
                                      intro,
                                  }) => {

    const heroImage = getImage(image) || image;

    return (
        <div>
            <FullWidthImage img={heroImage} title={title} subheading={subheading}/>

            <section className="px-2 sm:px-4">
                <div className="container max-w-6xl mx-auto">

                    <TeamRoll/>
                    <h1 className="">{mainpitch.title}</h1>
                    <h3 className="">{mainpitch.description}</h3>
                    <h3 className="">{heading}</h3>
                    <p>{description}</p>
                    <Features gridItems={intro.blurbs}/>
                    <Link className="" to="/products">See all products</Link>
                    <h3 className="">Latest stories</h3>
                    <BlogRoll/>
                    <Link className="" to="/blog">Read more</Link>

                </div>
            </section>
        </div>
    );
};

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
};

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
