import React from 'react'
import { Icon } from '@iconify/react';
import { mobile } from "../responsive";


import styled from 'styled-components'

const Container = styled.div`
    width: inherit;
    display: flex;
    margin-top:20px;
    justify-content:space-between;
    align-items: center;
    
${mobile({justifyContent:'flex-start',gap:'20px',cursor:'pointer'})}


`
const LeftContainer = styled.div`
    padding:10px 0px;
    display: flex;
    align-items:center;
    gap:20px;



`
const Title = styled.h1`
font-size:1.6em;

`
const IconContainer = styled.div`
display: flex;
align-items:center;
cursor:pointer;


    transition: all .8s ease-in-out;
    
    &:hover{
        transform: scale(.9);
    }
`



const SearchBar = ({handleLogout}) => {
  return (
    <Container>
        <LeftContainer>
        <Title>Dashboard</Title>
        <IconContainer onClick={()=>{handleLogout()}}>
                <Icon icon="fe:logout" color="#393744" width="25" height="25" />
                </IconContainer>
        </LeftContainer>
           
    </Container>
  )
}

export default SearchBar