import React from "react";
import PropTypes from "prop-types";
import {kebabCase} from "lodash";
import {Helmet} from "react-helmet";
import {graphql, Link} from "gatsby";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const TeamMemberTemplate = ({
                                     content,
                                     contentComponent,
                                     title,
                                     jobTitle,
                                     memberImage,
                                     tags,
                                     helmet,
                                 }) => {
    const PostContent = contentComponent || Content;

    return (
        <section className="">
            <section className="px-2 sm:px-4">
                <div className="container max-w-6xl mx-auto">

                    {helmet || ""}

                    <div className="">

                        <div className="info-for-front-side-of-card">
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: memberImage,
                                    alt: `featured image thumbnail for team member ${title}`,
                                    width:
                                    memberImage.childImageSharp
                                        .gatsbyImageData.width,
                                    height:
                                    memberImage.childImageSharp
                                        .gatsbyImageData.height,
                                }}
                            />
                            <h1 className="">{title}</h1>
                            <p>{jobTitle}</p>
                        </div>

                        <div className="info-for-flip-side-of-card">
                            <PostContent content={content}/>
                        </div>

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

                </div>
            </section>
        </section>
    );
};

TeamMemberTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    memberImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
};

const TeamMember = ({data}) => {
    const {markdownRemark: teamMember} = data;

    return (
        <Layout>
            <TeamMemberTemplate
                content={teamMember.html}
                contentComponent={HTMLContent}
                description={teamMember.frontmatter.jobTitle}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${teamMember.frontmatter.title}`}</title>
                        <meta
                            name="jobTitle"
                            content={`${teamMember.frontmatter.jobTitle}`}
                        />
                    </Helmet>
                }
                tags={teamMember.frontmatter.tags}
                title={teamMember.frontmatter.title}
                jobTitle={teamMember.frontmatter.jobTitle}
                memberImage={teamMember.frontmatter.memberImage}
            />
        </Layout>
    );
};

TeamMember.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default TeamMember;

export const pageQuery = graphql`
  query TeamPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        jobTitle
        memberImage {
            childImageSharp {
              gatsbyImageData(
                width: 120
                quality: 100
                layout: CONSTRAINED
              )
            }
        }
        tags
      }
    }
  }
`;
