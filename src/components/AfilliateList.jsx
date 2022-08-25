import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {DefaultHead,DefaultTitle,DefaultContent,DefaultBadge} from '../styles/styles'
import axios from 'axios'
import AfilliateListItem from './AfilliateListItem'



const Container = styled.div``
const Head = styled(DefaultHead)``
const Title = styled(DefaultTitle)``
const Content = styled(DefaultContent)`
    display:flex;
    flex-direction:column;
   
`
const Badge = styled(DefaultBadge)``



const AfilliateList = () => {
    const [AfilliateList,setAfilliateList] = useState([])
    const getData = async() => {
       await axios.get('https://heroku-test-afilliates.herokuapp.com/api/all_members',).then((res) => {
            setAfilliateList(res.data.data);

        })


    }

    useEffect(() => {
        getData()

    },[])

  return (
   <Container>
        <Head>Current Afilliates</Head>
        <Title>You currently have <Badge>{AfilliateList.length  }</Badge>  afilliate members.</Title>
        <Content>
            {AfilliateList.map((user,i) => (
                <AfilliateListItem key={user.ID} user={user} index={i} />
            ))}
        </Content>
   </Container>
  )
}

export default AfilliateList