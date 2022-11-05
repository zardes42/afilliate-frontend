import React from 'react'
import styled from 'styled-components'
import notFound from '../assets/not-found.png'
const Container = styled.div`
width: 100%;
height: 100vh;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;


`
const Header = styled.h1`
font-size:50px;
padding:15px;
`
const Image = styled.img`
    width:50%;

`


const NotFound = () => {
  return (
    <Container>
        <Header>Page Not found</Header>
        <Image src={notFound}></Image>

    </Container>
  )
}

export default NotFound