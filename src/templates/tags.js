import * as React from "react";
import {Helmet} from "react-helmet";
import {Link, graphql} from "gatsby";
import Layout from "../components/Layout";

class TagRoute extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges;
        const postLinks = posts.map((post) => (
            <li key={post.node.fields.slug}>
                <Link to={post.node.fields.slug}>
                    <h2 className="">{post.node.frontmatter.title}</h2>
                </Link>
            </li>
        ));
        const tag = this.props.pageContext.tag;
        const title = this.props.data.site.siteMetadata.title;
        const totalCount = this.props.data.allMarkdownRemark.totalCount;
        const tagHeader = `${totalCount} post${
            totalCount === 1 ? "" : "s"
        } tagged with “${tag}”`;

        return (
            <Layout>
                <section className="px-2 sm:px-4">
                    <div className="container max-w-6xl mx-auto">

                        <Helmet title={`${tag} | ${title}`}/>
                        <div className="mb-4">
                            <h3 className="">{tagHeader}</h3>
                            <ul className="">{postLinks}</ul>
                            <p>
                                <Link to="/tags/">Browse all tags</Link>
                            </p>
                        </div>

                    </div>
                </section>
            </Layout>
        );
    }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
