import styled from 'styled-components'
import { mobile } from "../responsive";



export const DefaultHead = styled.h1`
font-size:1.6em;
`
export const DefaultTitle = styled.div`
    color: rgba(0, 0, 0, 0.4);
    font-size:1.1em;
    margin-bottom:20px ;

`
export const DefaultContent = styled.div`
    display: flex;
    gap:20px;

`
export const DefaultBadge = styled.span`
background-color:black;
display: inline-block;
padding:5px 10px;
border-radius: 6px;
color: white;
margin: 0 3px;
`
export const DefaultInputContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding: 30px 0px;
${mobile({padding: '20px 0'})}

`
export const DefaultInput = styled.input`
    color:#393744 ;
    width:60%;
    height: 30px;
    
    padding: 10px;
    background-color:transparent;
    border: 1px solid gray;
    border-radius:30px;
${mobile({padding: '5px 5px 5px 20px',width:'90%'})}



    &::placeholder{
        color:rgba(0, 0, 0, 0.5);
    }
    &:active,:focus {
        outline: none;

    }


    `
export const DefaultLabel = styled.label`
    margin-bottom: 25px;
${mobile({marginBottom:'10px'})}
`

