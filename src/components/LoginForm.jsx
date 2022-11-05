import React,{ useState} from 'react'
import styled from 'styled-components'
import {DefaultInputContainer,DefaultInput,DefaultLabel} from '../styles/styles'
import {Link} from 'react-router-dom'
import {axiosJWT} from '../axios'
import {validateEmail} from '../utilities/index'
import { useNavigate} from 'react-router-dom'



const Container = styled.div`
    width: 100%;
    height: 280px;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;

`
const InputContainer = styled(DefaultInputContainer)`
    padding:20px 0 0 0 ;
`
const Input = styled(DefaultInput)`
    padding:15px;
    font-size: 0.9rem;
    letter-spacing:1px;
    width:80%;
`
const Label = styled(DefaultLabel)`
    font-size: 0.9rem;
    margin:0 0 5px 0;
    
`
const Button = styled.button`
    width:80%;
    border-radius: 20px;
    padding: 10px 20px;
    border: 1px solid #393744;
    color: #fff;
    background-color: rgb(0, 0, 0);
    font-size:1.1em;
    font-weight: 400;
    cursor: pointer;
    margin-top:40px;
`
const Bottom = styled.div`
    width:80%;
    /* background-color: red; */
    margin-top:20px;
    text-align: center;
    font-size: 0.9rem;

`
const Message= styled.div`
    width:80%;
    display:block;
    color:red;
    text-align: center;
    font-size: 14px;

`

const LoginForm = ({setAuthorized}) => {
    const[ErrMessage,setErrMessage] = useState('')
    let navigate = useNavigate();
    const loginHandler = async(e) =>{
        e.preventDefault();
        const email = e.target['email'].value.trim();
        const password = e.target['password'].value.trim();

        if(validateEmail(email)){
            try{
                await  axiosJWT.post('/login',{
                    email,
                    password
            
                  }).then(response => {
                    if(response.data.auth){
                        setAuthorized(true)
                      sessionStorage.setItem('accessToken', response.data.accessToken)
                      sessionStorage.setItem('refreshToken', response.data.refreshToken)
                      navigate('/dashboard')
        
                     
                    }else{
                        setAuthorized(false)
                        setErrMessage(response.data.message)
                    }
                    setErrMessage(response.data.token|| response.data.message);
                
                  })
            }catch(err){
                console.log(err.message)
              }
              
            
        }else{
            setErrMessage('Please provide a valid email address')
        }



        
    }
    const handleChange =() => {
        setErrMessage('')
    }
   
  return (
    <Container>
        <Form onSubmit={(e) =>{loginHandler(e)}}>
            <InputContainer>
                <Label htmlFor="email" >Email</Label>
                <Input onChange = {(e)=>{handleChange(e)}} name="email" id="email" placeholder="Enter your email" />
            </InputContainer>
            <InputContainer>
                <Label htmlFor="password" >Password</Label>
                <Input onChange = {(e)=>{handleChange(e)}} type='password' name="password" id="password"  />
            </InputContainer>
            <Button type="submit">Sign In</Button>
        </Form>
        <Bottom>Don't have an account?<Link to='/sign-up'> Sign up</Link></Bottom>
        <Message>{ErrMessage}</Message>
    </Container>
  )
}

export default LoginForm