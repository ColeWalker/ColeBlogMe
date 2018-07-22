import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'

const PostTop = styled.div`
    display: block;
    width:100%;
    text-decoration: none;
    background: #e76f51;
    padding: 20px 10px 10px 10px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 0px;
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

export default function PostTitle({title, dateFormatted}){
  return(
    <PostTop>
      <Title>{title}</Title>
      <SubTitle>{dateFormatted}</SubTitle>
    </PostTop>
  )

}