import React from 'react'
import '../styles/Loader.css';
import styled from 'styled-components'

const Container = styled.div`
position: fixed;
width:100vw;
height:100vh;
background-color: #00000035;

`
const Loader = () => {

  return (
    
    <Container >
    <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
    </div>
    </Container>
  )
}

export default Loader