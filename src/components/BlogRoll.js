import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery} from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRollTemplate extends React.Component {
    render() {
        const {data} = this.props
        const {edges: posts} = data.allMarkdownRemark

        return (
            <div className="">
                {posts && posts.map(({node: post}) => (
                    <div className="" key={post.id}>
                        <article className={` ${post.frontmatter.featuredPost ? 'is-featured' : ''}`}>
                            <header>
                                {post.frontmatter.featuredImage ? (
                                    <div className="">
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: post.frontmatter.featuredImage,
                                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                                width:
                                                post.frontmatter.featuredImage.childImageSharp
                                                    .gatsbyImageData.width,
                                                height:
                                                post.frontmatter.featuredImage.childImageSharp
                                                    .gatsbyImageData.height,
                                            }}
                                        />
                                    </div>
                                ) : null}
                                <p className="">
                                    <Link className="" to={post.fields.slug}>{post.frontmatter.title}</Link>
                                    <span> &bull; </span>
                                    <span className="">{post.frontmatter.date}</span>
                                </p>
                            </header>
                            <p>
                                {post.excerpt}
                                <br/>
                                <br/>
                                <Link className="" to={post.fields.slug}>Keep Reading →</Link>
                            </p>
                        </article>
                    </div>
                ))}
            </div>
        )
    }
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}


export default function BlogRoll() {
    return (
        <StaticQuery
            query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredPost
                  featuredImage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `} render = { (data, count) => <BlogRollTemplate data={data} count={count}/> }
        />
    );
}
