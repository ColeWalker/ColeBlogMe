import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div style ={{
    position: 'relative',
    width: '25%',
    left: '50%',
    transform: 'translateX(-50%)',
    alignItems: 'center',
    background: '#2a9d8f',
    margin: '20px 20px 0 0' }
  }>
    <Link to={'/'} style={
      {
        textDecoration:'none'
      }
    }>
    <h1 style={{
      textDecoration: 'none',
       textAlign: 'center',
        margin: '0 auto',
        padding: '25px',
      color: 'black',
      fontFamily: 'Gidole',
      fontWeight:'bold',
      fontSize: '5vw'
    }}>
      Cole.blog
    </h1>
    </Link>
  </div>
)

export default Header
