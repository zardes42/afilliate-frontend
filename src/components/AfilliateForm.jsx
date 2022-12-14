import React,{ useState} from 'react'
import styled from 'styled-components'
import {axiosAuth} from '../axios'
import { mobile } from "../responsive";
import {DefaultInputContainer,DefaultInput,DefaultLabel} from '../styles/styles'



const Container = styled.div`
    width: 100%;
    background-color: rgba(255, 255, 255, 0.503);
    padding:0 20px;
    border-radius: 10px;
${mobile({width:'90vw'})}

    
`
const InputContainer = styled(DefaultInputContainer)``
const Input = styled(DefaultInput)``
const Label = styled(DefaultLabel)``
const Submit = styled.button`
    max-width:200px;
    border-radius: 20px;
    padding: 7px 20px;
    border: 1px solid #393744;
    color: #fff;
    background-color: rgb(0, 0, 0);
    font-size:20px;
    font-weight: 400;
    cursor: pointer;

`
const Button = styled.button`
    /* max-width: 200px; */
    padding: 7px 20px;
    background-color:transparent;
    border: 1px solid #393744;
    border-radius: 20px;
    cursor: pointer;
    `
const CodeContainer = styled.div`
        display: flex;
        gap: 10px;
        align-items: center;

`
const Code = styled.p`
        letter-spacing:2px;
        font-size:25px;
`
const Error = styled.p`
    margin-top:10px;
`
const AfilliateForm = ({handleLoading}) => {
    const[message,setMessage] = useState('');
    const[code,setCode] = useState('');
    
    
    // GET CODE FROM SERVER
    const getCode = async(e) => {
        e.preventDefault();
        try{
            await axiosAuth.get('https://heroku-test-afilliates.herokuapp.com/api/new_code',{headers:{
                "x-access-token" : sessionStorage.getItem("accessToken")
            }}).then(res => {
                setCode(res.data)
            })
          }
          catch(error){
            setMessage(error.message)
      
          }
      
        }

    const handleFormSubmit =(e) => {
        e.preventDefault();
       let first_name = e.target['first_name'].value.trim()
       let last_name = e.target['last_name'].value.trim()
       let  church = e.target['church'].value.trim()

       if (first_name=== ''||last_name=== ''||church=== ''||code === '' ) {
            setMessage('All fields are required..')

       }else{
        handleLoading(true)
       try{
           
           axiosAuth.post('/new_user',{
               first_name,
               last_name,
               church,
               code
            }).then(response =>{
                setMessage(response.data.message)
                handleLoading(false)
            })
            
        }catch(error){
            setMessage(error.message)
            handleLoading(false)
        }
    }
        

    }
       
       

    
  return (
    <Container>
        <form id="afilliate_create_form" onSubmit={(e)=>{handleFormSubmit(e)}} >
            <InputContainer>
                <Label htmlFor="first_name" >First Name</Label>
                <Input id= 'first_name' type="text"  name="first_name"/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="last_name">Last Name</Label>
                <Input id= 'last_name' type="text"  name="last_name"/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="church">Church</Label>
                <Input id='church'type="text"  name='church'/>
            </InputContainer>
        </form>
            <CodeContainer>
                <Button form='code_generator'>Generate Code</Button> 
                <Code>{code}</Code>   
            </CodeContainer>
            <InputContainer>
            <Submit type='submit' form='afilliate_create_form' >Submit</Submit>{message && <Error>{message}</Error>}
            

            </InputContainer>
            
            
            <form id='code_generator' onSubmit={(e)=> getCode(e)}/>           

            
    </Container>
  )
}

export default AfilliateForm