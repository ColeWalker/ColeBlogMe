import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'

const StyledLink = styled(Link)`
  background: #e76f51;
  border-style: solid;
  border-width: 2px;
  margin: 0 auto;
  text-align: center;
  padding: 15px 20px 15px 20px;
  text-decoration: none;
  color: white;
  margin-bottom: 20px;
  border-color: #e76f51;
  &:hover{
    background-color: white;
    color: black;
    border-style: solid;
    border-width: 2px;
    border-color: #e76f51;
  }
  
`;



export default function PrettyLink({path, text}){
  return(
    <StyledLink to={path}>{text}</StyledLink>
  )
}