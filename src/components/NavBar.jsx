import React from 'react'
import styled from 'styled-components';
import { Icon } from '@iconify/react';



 
const Container = styled.div`
width: 100px;
height: 100vh;
display: flex;
justify-content: center;

    
`
const IconsContainer = styled.div`
    width: 100px;
    height: 100vh;
    margin: 5px;
    position:fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`
const IconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-right: solid 2px rgba(255, 255, 255, 0) ;
    margin:20px 0;
    transition: all 0.5 ease;
    
    &.active{
        border-right: solid 2px #393744 ;
    }
`


const NavBar = () => {
    const setActive  =(e)=>{
        let element = e.currentTarget;
        if (element){

            element.classList.toggle('active')
        }
        console.log(e.currentTarget.classList)
    }
  return (
        <Container>
            <IconsContainer>
                <IconContainer  onClick={(e)=> setActive(e)} >
                    <Icon icon="bx:home"  width="25" height="25" color="#393744" />
                </IconContainer >
                <IconContainer onClick={(e)=> setActive(e)}>  
                    <Icon icon="bi:person"  width="25" height="25" color="#393744" />
                </IconContainer>
                <IconContainer onClick={(e)=> setActive(e)}>
                <Icon icon="material-symbols:add-box-outline-rounded"  width="25" height="25" color="#393744" />
                </IconContainer>
                <IconContainer onClick={(e)=> setActive(e)}>
                <Icon icon="ci:settings" color="#393744" width="25" height="25" />
                </IconContainer>
            
            </IconsContainer>
        </Container>
  )
}

export default NavBar;