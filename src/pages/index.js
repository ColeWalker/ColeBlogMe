import React from 'react'
import PostCard from "../components/PostCard"
import AboutMe from "../components/AboutMe"
import SocialLinks from '../components/SocialLinks'

const IndexPage = ({data}) => (
  <div>
    {data.allMarkdownRemark.edges.map(post => (
      <div>
        <PostCard title = {post.node.frontmatter.title}
                 path = {post.node.frontmatter.path}
                 dateFormatted = {post.node.frontmatter.dateFormatted}
                  excerpt = {post.node.frontmatter.excerpt}/>
      </div>
    ))}
    <AboutMe/>
    <SocialLinks/>
  </div>


)
/*
TODO: Implement code which will make it so that when you click on a button, it will show the next 10 posts
This can be done by using graphql's "SKIP" command in allMarkdownRemark- which will skip the first 10 posts in a new query
*/


// This query will search through the markdown files and grab 10 posts
// Then it filters out the unpublished posts
// Then it grabs their frontmatter
export const pageQuery = graphql`
  query IndexQuery{
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      limit: 10
      filter: {frontmatter:{published:{eq: true}}}
     ){
      edges{
        node{
          frontmatter {
            path
            title
            dateFormatted
            excerpt
          }
        }
      }
    }
  }
`


export default IndexPage
