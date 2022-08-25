import React from 'react'
import { Icon } from '@iconify/react';

import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top:20px;
    justify-content:space-between;
    align-items: center;
`
const LeftContainer = styled.div`
    padding:10px 0px;
`
const Title = styled.h1`
font-size:1.6em;
`
const SearchContainer = styled.div`
    display: flex;
    justify-content:space-around;
    gap: 10px;
    align-items:center;
    padding:10px;
    background-color:#fff;
    border: 1px solid #fff;
    border-radius: 30px;
    `

const Input = styled.input`
    border: none;
    color:#393744 ;
    font-size:16px;
    &::placeholder{
        color:rgba(0, 0, 0, 0.5);
    }
    &:active,:focus {
        border: none;
        outline: none;

    }


    `
    


const SearchBar = () => {
  return (
    <Container>
        <LeftContainer>
        <Title>Dashboard</Title>
        </LeftContainer>
            <SearchContainer>
                <Icon icon="akar-icons:search" color="#393744" width="16" height="16" />
                <Input placeholder="Search" />
            </SearchContainer>
    </Container>
  )
}

export default SearchBar