import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery} from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class TeamRollTemplate extends React.Component {
    render() {
        const {data} = this.props
        const {edges: teamMembers} = data.allMarkdownRemark

        return (
            <div className="">
                {teamMembers && teamMembers.map(({node: teamMember}) => (
                    <div className="" key={teamMember.id}>
                        <article className="">
                            <header>
                                {teamMember.frontmatter.memberImage ? (
                                    <div className="">
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: teamMember.frontmatter.memberImage,
                                                alt: `featured image thumbnail for teamMember ${teamMember.frontmatter.title}`,
                                                width:
                                                teamMember.frontmatter.memberImage.childImageSharp
                                                    .gatsbyImageData.width,
                                                height:
                                                teamMember.frontmatter.memberImage.childImageSharp
                                                    .gatsbyImageData.height,
                                            }}
                                        />
                                    </div>
                                ) : null}
                                <p className="">
                                    <Link className="" to={teamMember.fields.slug}>{teamMember.frontmatter.title}</Link>
                                </p>
                            </header>
                            <p>
                                {teamMember.excerpt}
                                <br/>
                                <br/>
                                <Link className="" to={teamMember.fields.slug}>Keep Reading →</Link>
                            </p>
                        </article>
                    </div>
                ))}
            </div>
        )
    }
}

TeamRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}


export default function TeamRoll() {
    return (
        <StaticQuery
            query={graphql`
        query TeamRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "team-member" } } }
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
                  memberImage {
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
      `} render = { (data, count) => <TeamRollTemplate data={data} count={count}/> }
        />
    );
}
