import React from 'react'
import styled from 'styled-components'
import {DefaultTitle} from '../styles/styles'
import {removeTimeStamp,Capitalize} from '../utilities/'

import { Icon } from '@iconify/react';
import { mobile } from "../responsive";


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
    justify-content:space-between;

${mobile({justifyContent:'space-around',gap:'50px'})}

    
`
const Info = styled(DefaultTitle)`
    font-size:16px;
    display:flex;
    justify-content:center;
    width: 100px;
    margin-bottom: 0px;

`

const AfilliateListItem = ({user,index}) => {
    const {first_name, last_name,church,code,date_created,sales_made} = user

    
  return (
    <Container id = {index}>
        <IconContainer>
        <Icon icon="bx:user"  width="30" height="30" color="#393744"/>
        </IconContainer>
        <InfoContainer>
            <Info>{Capitalize(first_name) || ''} {Capitalize(last_name) || ''}</Info>
            <Info>{code}</Info>
            <Info>{sales_made || 0}</Info>
            <Info>{Capitalize(church) || ''}</Info>
            <Info>{removeTimeStamp(date_created) || ''}</Info>
        </InfoContainer>
    </Container>
  )
}

export default AfilliateListItem