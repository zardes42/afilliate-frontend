import React,{ useState} from 'react'
import styled from 'styled-components'
import {DefaultInputContainer,DefaultInput,DefaultLabel} from '../styles/styles'
import {Link} from 'react-router-dom'
import {validateEmail} from '../utilities/index'
import {useNavigate} from 'react-router-dom'
import {axiosJWT} from '../axios'



const Container = styled.div`
    width: 100%;

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
    font-size: 0.8rem;
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
const SignUpForm = ({setAuthorized,authorized}) => {
    const[ErrMessage,setErrMessage] = useState('')
    let navigate = useNavigate();

    const signUpHandler =(e) => {
        e.preventDefault();
        const username = e.target['username'].value.trim();
        const email = e.target['email'].value.trim();
        const password = e.target['password'].value.trim();
        const passwordVerify  = e.target['password-check'].value.trim();
        if(username !== '' && email!== '' && password!== '' && passwordVerify!== ''){
            if(validateEmail(email)){
                try{
                    axiosJWT.post('/register',{
                        username,
                        email,
                        password
                    }).then(response =>{
                    
                        if(response.data.auth){
                            setAuthorized(true)
                            sessionStorage.setItem('accessToken', response.data.accessToken)
                            sessionStorage.setItem('refreshToken', response.data.refreshToken)
                            navigate('/dashboard')
              
                           
                          }else{
                            setAuthorized(false)
                              setErrMessage(response.data.message)
                          }
                    })
                }catch(e){console.log(e.message)}
            }else{
                setErrMessage('Please enter a valid email address.')
            }
        }else{
            setErrMessage('All fields are required.')
        }

    }
    const handleChange = () => {
        setErrMessage('')
    }

  return (
    <Container>
        <Form onSubmit={(e) =>{signUpHandler(e)}}>
            <InputContainer>
                <Label htmlFor="username" >Username</Label>
                <Input onChange = {(e)=>{handleChange(e)}} name="username" id="username" placeholder="Enter your username" />
            </InputContainer>
            <InputContainer>
                <Label htmlFor="email" >Email</Label>
                <Input onChange = {(e)=>{handleChange(e)}} name="email" id="email" placeholder="Enter your email" />
            </InputContainer>
            <InputContainer>
                <Label htmlFor="password" >Password</Label>
                <Input onChange = {(e)=>{handleChange(e)}} type='password' name="password" id="password"  />
            </InputContainer>
            <InputContainer>
                <Label htmlFor="password-check" >Retype Password</Label>
                <Input onChange = {(e)=>{handleChange(e)}} type='password' name="password-check" id="password-check"  />
            </InputContainer>
            <Button type="submit"  >Sign Up</Button>
        </Form>
        <Bottom>If you already have an account.Click here to<Link to='/login'> Login</Link></Bottom>
        <Message>{ErrMessage}</Message>
    </Container>
  )
}

export default SignUpForm