import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {DefaultHead,DefaultTitle,DefaultContent,DefaultBadge} from '../styles/styles'
import axios from 'axios'
import AfilliateListItem from './AfilliateListItem'
import { mobile } from "../responsive";




const Container = styled.div``
const Head = styled(DefaultHead)``
const Title = styled(DefaultTitle)``
const Content = styled(DefaultContent)`
    display:flex;
    flex-direction:column;
   
`
const Badge = styled(DefaultBadge)``
const TableHeader = styled.div`
 display:flex;
    align-items:center;
    max-width:800px;
    padding:10px 50px 0px 30px;
    
`
const Info = styled.div`
    display:flex;
    justify-content:center;
    text-align:center;
    align-items:center; 
    font-size:20px;
    width: 100px;
    margin-bottom: 0px;
`
 const LeftContainer = styled.div`
 display:block;
 background-color: red;
 width: 80px;
 &:after { 
    content:'';
    display:block;
 background-color: red;
 width: 80px;
 }
    
    `
 const RightContainer = styled.div`
    display:flex;
    flex:2;
    justify-content:space-between;
${mobile({justifyContent:'space-around',gap:'50px'})}

 `



const AfilliateList = () => {
    const [AfilliateList,setAfilliateList] = useState([])
    const getData = async() => {
        try{

       await axios.get('https://heroku-test-afilliates.herokuapp.com/api/all_members',).then((res) => {
        setAfilliateList(res.data);
        })

    }catch(e){
        console.log(e.message)
    }

    }

    useEffect(() => {
        getData()

    },[AfilliateList])

  return (
   <Container>
        <Head>Current Afilliates</Head>
        <Title>You currently have <Badge>{AfilliateList.length}</Badge>  afilliate members.</Title>
        <Content>
            <TableHeader>
                <LeftContainer>
               {''}
                </LeftContainer>
                <RightContainer>
                    <Info>Name</Info>
                    <Info>Code</Info>
                    <Info>Sales </Info>
                    <Info>Church</Info>
                    <Info>Date Joined </Info>
                </RightContainer>
            </TableHeader>
            {AfilliateList.map((user,i) => (
                <AfilliateListItem key={user._id} user={user} index={i} />
            ))}
        </Content>
   </Container>
  )
}

export default AfilliateList