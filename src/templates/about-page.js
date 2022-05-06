import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";

// eslint-disable-next-line
export const AboutPageTemplate = ({title, content, contentComponent}) => {
    const PageContent = contentComponent || Content;

    return (
        <section className="px-2 sm:px-4">
            <div className="container max-w-6xl mx-auto">

                <h2 className="">{title}</h2>
                <PageContent className="" content={content}/>

            </div>
        </section>
    );
};

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const AboutPage = ({data}) => {
    const {markdownRemark: post} = data;

    return (
        <Layout>
            <AboutPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    );
};

AboutPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
