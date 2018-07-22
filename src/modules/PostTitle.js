import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'




const Title = styled.h1`
  display: block;
  margin: 0;
  font-size: ${rhythm(1)};
  line-height: ${rhythm(1.5)};
  @media only screen and (min-width: 768px) {
    padding: ${rhythm(1 / 2)} 0;
    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;
    font-size: ${rhythm(1.5)};
    line-height: ${rhythm(2)};
  }
`


export default function PostTitle({children, title}){
  const Container = () => {
    return(
      <TopCard>
        <Title className="post-title">
          {title}
        </Title>
        {children}
      </TopCard>
    )
  }
  return <Container />
}