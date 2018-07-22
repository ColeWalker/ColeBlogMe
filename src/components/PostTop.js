import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'

const changeColors = props =>{
  return `
  &:hover{
  background-color: #EFA390;}
  `
}

const TopLink = styled(Link)`
  display: block;
  width:100%;
  text-decoration: none;
  background: #e76f51;
  padding: 20px 10px 10px 10px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
  ${props =>changeColors(props)}
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h2`
  display: block;
  color: white;
  margin: 0 auto;
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 0 0 10px 0;
`;
const SubTitle = styled.p`
  display: block;
  color: white;
  margin: 0 auto;
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 0 0 10px 0;
`;

export default function PostTop({title, path, dateFormatted}){
  return(
  <TopLink to ={path}>
    <Container>
      <Title>{title}</Title>
      <SubTitle>{dateFormatted}</SubTitle>
    </Container>

  </TopLink>
)
}