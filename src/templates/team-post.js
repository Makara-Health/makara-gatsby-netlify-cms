import React from "react";
import PropTypes from "prop-types";
import {kebabCase} from "lodash";
import {Helmet} from "react-helmet";
import {graphql, Link} from "gatsby";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";

// eslint-disable-next-line
export const TeamPostTemplate = ({
                                     content,
                                     contentComponent,
                                     jobTitle,
                                     tags,
                                     fullName,
                                     helmet,
                                 }) => {
    const PostContent = contentComponent || Content;

    return (
        <section className="">
            {helmet || ""}
            <div className="">
                <h1 className="">{fullName}</h1>
                <p>{jobTitle}</p>
                <PostContent content={content}/>
                {tags && tags.length ? (
                    <div className="mt-4">
                        <h4>Tags</h4>
                        <ul className="">
                            {tags.map((tag) => (
                                <li key={tag + `tag`}>
                                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>
        </section>
    );
};

TeamPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
};

const TeamPost = ({data}) => {
    const {markdownRemark: teamMember} = data;

    return (
        <Layout>
            <TeamPostTemplate
                content={teamMember.html}
                contentComponent={HTMLContent}
                description={teamMember.frontmatter.jobTitle}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${teamMember.frontmatter.fullName}`}</title>
                        <meta
                            name="jobTitle"
                            content={`${teamMember.frontmatter.jobTitle}`}
                        />
                    </Helmet>
                }
                tags={teamMember.frontmatter.tags}
                title={teamMember.frontmatter.fullName}
            />
        </Layout>
    );
};

TeamPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default TeamPost;

export const pageQuery = graphql`
  query TeamPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        fullName
        jobTitle
        tags
      }
    }
  }
`;
