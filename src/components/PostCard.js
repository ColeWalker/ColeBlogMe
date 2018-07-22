import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import PostTop from './PostTop'
import PostBottom from './PostBottom'


export default function PostCard({title, path, dateFormatted, excerpt}){
  return(
    <div>
      <PostTop title = {title} path={path} dateFormatted = {dateFormatted}/>
      <PostBottom path = {path} excerpt = {excerpt} />
    </div>
  )
}