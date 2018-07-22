import React from 'react'
import styled from 'styled-components'
import GithubIcon from 'react-icons/lib/fa/github'
import TwitterIcon from 'react-icons/lib/fa/twitter'

const Container = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0 10px 0 10px;
  color: #F4A261;
  :hover{
    transform: scale(1.1);
  }
`;

function Twitter(props){
  return(
    <Link
      href="https://twitter.com/SigmaBlader"
    >
      <TwitterIcon size ={32}/>
    </Link>
  )
}
function Github(props){
  return(
    <Link
      href="https://github.com/ColeWalker"
    >
      <GithubIcon size ={32}/>
    </Link>
  )
}

export default function SocialLinks(){
  return(
  <Container>
    <Github></Github>
    <Twitter></Twitter>
  </Container>
  )
}