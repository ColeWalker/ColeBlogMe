import React from 'react';
import Helmet from 'react-helmet';
import PostTitle from '../components/PostTitle'
import PrettyLink from '../components/PrettyLink'
import SocialLinks from '../components/SocialLinks'


export default function Template({data}){
  const {markdownRemark: post} = data;
  return (
    <div>
      <PostTitle title = {post.frontmatter.title} dateFormatted = {post.frontmatter.dateFormatted}/>
      <div style={{
        background: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <div style={{
        padding: '30px'
        }}
           dangerouslySetInnerHTML={{__html: post.html}}/>
      <PrettyLink path={'/'} text={"Home"}/>
      </div>
      <SocialLinks/>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path} }){
      html
      frontmatter{
        path
        title
        dateFormatted
      }
    }  
  }
  `