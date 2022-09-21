import React,{useEffect,useState} from 'react'

import { Icon } from '@iconify/react';
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import AfilliateForm from '../components/AfilliateForm';
import {DefaultTitle,DefaultContent} from '../styles/styles'
import AfilliateList from '../components/AfilliateList';
import Loader from '../components/Loader';
import axios from 'axios'
import { mobile } from "../responsive";

const Container = styled.div`

    width: inherit;
    display: flex;
    background-color:rgba(255, 255, 255, 0.212);
${mobile({width:'100vw'})}

    


`
const Body = styled.div`
display: flex;
flex-direction: column;
width: inherit;
margin-left: 120px;
${mobile({padding:'0 10px',margin:'0',width:'100vw',overflow: 'hidden'})}

`
const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom:40px;
`
const Title = styled(DefaultTitle)``

const Content = styled(DefaultContent)`
    display: flex;
`
const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:30px;
    flex-wrap: wrap;
    ${mobile({justifyContent: 'flex-start',padding:'0 10px'})}
` 

const Card = styled.div` 
    width: 200px;
    height: 150px;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    ${mobile({maxWidth:'150px' , maxHeight:'120px'})}
`
const CardInfo = styled.div`
    padding: 15px;
    max-width: 100%;
    height: 100%;
    position: relative;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
`
const TopTitle = styled.p`
    font-size:16px;
   
`
const Bottom = styled.div`
    position: absolute;
    bottom: 30%;
    left: 10%;
    `
const Value = styled.span`
    font-weight: 600;
    font-size: 40px;
    ${mobile({fontSize :'30px'})}

    
`


const Home = () => {
    const[data,setData]= useState({})
    const [isLoading,setisLoading] = useState(false)
 
    const setDashboard = async() => {
       
        try{
            await axios.get('https://heroku-test-afilliates.herokuapp.com/api/dashboard').then(res => {   
            setData(res.data)
            })
          }
          catch(error){
            console.log(error.message)
      
          }
      
        }
    useEffect(() => {setDashboard()},[data])

    let iconSize = '25' ;
    let iconColor = '#393744';

const handleLoading =(value) => {
    setisLoading(value)

}


return (
    <Container>
       {isLoading ? <Loader /> : ''}
        <NavBar />
        <Body>
            <SearchBar />
            <Section>
                <Title>Actions available</Title>
                <Content>
                    <CardsContainer>
                    <Card>
                        <CardInfo >
                            <Top>
                                <TopTitle>Afilliates</TopTitle>
                                <Icon icon="bi:person"  width={iconSize} height={iconSize} color={iconColor} />
                            </Top>
                            <Bottom>
                                <Value>{data ? data.afilliates : 'n/a'}</Value>
                            </Bottom>
                        </CardInfo>
                    </Card>
                    <Card>
                        <CardInfo >
                            <Top>
                                <TopTitle>Total Orders</TopTitle>
                                <Icon icon="eva:shopping-cart-outline"  width={iconSize} height={iconSize} color={iconColor} />
                            </Top>
                            <Bottom>
                                <Value>{data ? data.total_orders :0}</Value>
                            </Bottom>
                        </CardInfo>
                    </Card>
                    <Card>
                        <CardInfo >
                            <Top>
                                <TopTitle>Completed Orders</TopTitle>
                                <Icon icon="ic:round-done"  width={iconSize} height={iconSize} color={iconColor} />
                            </Top>
                            <Bottom>
                                <Value>{data ? data.completed_orders :0}</Value>
                            </Bottom>
                        </CardInfo>
                    </Card>
                    <Card>
                        <CardInfo >
                            <Top>
                                <TopTitle>Proccessing Orders</TopTitle>
                                <Icon icon="uim:process"  width={iconSize} height={iconSize} color={iconColor} />
                            </Top>
                            <Bottom>
                                <Value>{data ? data.processing_orders :0}</Value>
                            </Bottom>
                        </CardInfo>
                    </Card>
                </CardsContainer>
                </Content>
            </Section>
            <Section>
                <Title>Add New Afilliate</Title>
                <Content>
                    <AfilliateForm handleLoading={handleLoading} isLoading={isLoading} />
                </Content>
            </Section>
            <Section>
                <AfilliateList />
            </Section>
            
            
        </Body>
        
    </Container>
  )
}

export default Home