import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container= styled.div`
    position: relative;
    width: 25%;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    background: #2a9d8f;
    margin: 20px 20px 0 0;
`;

const Logo = styled.h1`
      text-decoration: none;
      text-align: center;
      margin: 0 auto;
      padding: 25px;
      color: black;
      font-family: Gidole;
      font-weight: bold;
      font-size: 5vw;
      @media only screen and (max-width: 600px){
        width: 100%;
        font-size: 2.5vw;
      }

`;


const Header = ({ siteTitle }) => (
  <Container>
    <Link to={'/'} style={
      {
        textDecoration:'none'
      }
    }>
    <Logo>
      Cole.blog
    </Logo>
    </Link>
  </Container>
)

export default Header
