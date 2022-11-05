import React from 'react'
import styled from 'styled-components'
import loginImage from '../assets/login.png'
import SignUpForm from '../components/SignUpForm'
import {Navigate} from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`
const Header = styled.div`
  width: 100%;
  position:fixed;
  display : flex;
  align-items : center;
  justify-content :flex-start;
  padding:25px;
`
const HeaderLogo = styled.div`
  font-size:0.9rem;
  font-weight:500;
  letter-spacing:2px;
`

const Content = styled.div`
  flex: 1;
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content :center;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-self: center;
  background-color:white;
  padding: 50px ;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

`
const FormDescription = styled.div`
  height:50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const FormDescriptionHeader = styled.h2`
  font-weight:600;
  font-size:1.4rem;
`
const FormDescriptionText = styled.p`
  font-size:0.7rem;
  color: rgba(0, 0, 0, 0.4);
`


const ImageContainer = styled.div`
  flex: 1;
  display:flex;
  justify-content:flex-start;
  align-items: center;
  


`
const Image = styled.img`
width: 700px;
height: 600px;
object-fit: cover;



`

const SignUp = ({setAuthorized,authorized}) => {
  if (authorized) {
    return <Navigate to='/dashboard' />
  }
  return (
   <React.Fragment> 
    <Header>
          <HeaderLogo>
            PurityOath..
          </HeaderLogo>
        </Header>
      <Container>
        <Content>

        
        <FormContainer>
          <FormDescription>
            <FormDescriptionHeader>Welcome </FormDescriptionHeader>
            <FormDescriptionText>Enter your details to register.</FormDescriptionText>
          </FormDescription>
           

          <SignUpForm setAuthorized={setAuthorized} />


        </FormContainer>

        </Content>
        <ImageContainer>
          <Image src={loginImage} />
        </ImageContainer>

      </Container>
   </React.Fragment>
  )
}

export default SignUp