import React from 'react'
import styled from 'styled-components'
import {DefaultTitle} from '../styles/styles'
import {removeTimeStamp,Capitalize} from '../utilities/'

import { Icon } from '@iconify/react';


const Container = styled.div`
    display:flex;
    align-items:center;
    gap:50px;
    max-width:800px;
    padding:10px 50px 10px 30px;
    background-color:${props =>( props.id !== 0 && props.id % 2 === 1 ? 'white':'none')};
    box-shadow:${props =>( props.id !== 0 && props.id % 2 === 1 ? 'rgba(149, 157, 165, 0.2) 0px 8px 24px':'none')} ;
    border-radius: 13px;


    `
const IconContainer = styled.div``
const InfoContainer = styled.div`
    display:flex;
    flex:2;
    /* background-color:blue; */
    justify-content:space-between;
    
`
const Info = styled(DefaultTitle)`
    font-size:16px;
    margin-bottom: 0px;
`

const AfilliateListItem = ({user,index}) => {
    const {first_name, last_name,church,code,date_created} = user

    
  return (
    <Container id = {index}>
        <IconContainer>
        <Icon icon="bx:user"  width="30" height="30" color="#393744"/>
        </IconContainer>
        <InfoContainer>
            <Info>{Capitalize(first_name)} {Capitalize(last_name)}</Info>
            <Info>{Capitalize(church)}</Info>
            <Info>{code}</Info>
            <Info>{removeTimeStamp(date_created)}</Info>
        </InfoContainer>
    </Container>
  )
}

export default AfilliateListItem