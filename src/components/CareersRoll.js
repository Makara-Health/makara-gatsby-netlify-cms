import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery} from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class CareersRollTemplate extends React.Component {
    render() {
        const {data} = this.props
        const {edges: posts} = data.allMarkdownRemark

        return (
            <div className="">
                {posts && posts.map(({node: post}) => (
                    <div className="" key={post.id}>
                        <article className="">
                            <header>
                                {post.frontmatter.jobImage ? (
                                    <div className="">
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: post.frontmatter.jobImage,
                                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                                width:
                                                post.frontmatter.jobImage.childImageSharp
                                                    .gatsbyImageData.width,
                                                height:
                                                post.frontmatter.jobImage.childImageSharp
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

CareersRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}


export default function CareersRoll() {
    return (
        <StaticQuery
            query={graphql`
        query CareersRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "career-post" } } }
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
                  description
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredPost
                  jobImage {
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
      `} render = { (data, count) => <CareersRollTemplate data={data} count={count}/> }
        />
    );
}
