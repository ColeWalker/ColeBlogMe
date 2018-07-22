import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import PrettyLink from './PrettyLink'
const BottomCard = styled.div`
    background: white;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
  `;

const BottomText = styled.p`
  text-align: left;
  margin-left: 15px;
  margin-right 15px;
  padding: 15px 30px 30px 30px;

`;


export default function PostBottom ({path, excerpt}){
  return(
    <BottomCard>
      <BottomText>
        {excerpt}
      </BottomText>
      <PrettyLink path={path} text="Read More"/>
    </BottomCard>
)
}