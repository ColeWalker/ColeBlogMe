import React from 'react'
import styled from 'styled-components'
import coleprofile from '../images/coleprofile.png'

const Container = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: #2a9d8f;
  margin-top: 30px;
`;

const Avatar = styled.img`
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin: 10px;
`;
const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;


export default function AboutMe(){
  return(
    <Container>
      <Avatar src={coleprofile} alt="ColeProfile"/>
      <AboutDiv>
        <h3>About Me:</h3>
        <p style={{marginLeft: "20px", marginRight: "20px"}}>Hi, my name is Cole Walker. I'm a Junior at William Paterson University majoring
          in Computer Science with a minor in Information Technology.
        </p>
      </AboutDiv>
    </Container>

  )
}