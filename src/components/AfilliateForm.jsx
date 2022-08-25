import React,{ useState} from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import axios from 'axios'

const Container = styled.div`
    width: 100%;
    background-color: rgba(255, 255, 255, 0.503);
    padding:0 20px;
    border-radius: 10px;
    
`
const InputContainer = styled.div`
    width:100%;
    /* background-color:red; */
    display:flex;
    flex-direction:column;
    /* margin-bottom: 5px; */
    padding: 30px 0px;
`


const Input = styled.input`
    color:#393744 ;
    width:60%;
    height: 30px;
    font-size:16px;
    padding: 10px;
    background-color:transparent;
    border: 1px solid gray;
    border-radius:30px;


    &::placeholder{
        color:rgba(0, 0, 0, 0.5);
    }
    &:active,:focus {
        outline: none;

    }


    `
const Label = styled.label`
    margin-bottom: 25px;
`
const Submit = styled.button`
    max-width:200px;
    border-radius: 20px;
    padding: 7px 20px;
    border: 1px solid #393744;
    color: #fff;
    background-color: rgb(0, 0, 0);
    font-size:20px;
    font-weight: 400;

`
const Button = styled.button`
    /* max-width: 200px; */
    padding: 7px 20px;
    background-color:transparent;
    border: 1px solid #393744;
    border-radius: 20px;
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
    color: red;
    margin-top:10px;
`
const AfilliateForm = () => {
    // GET CODE FROM SERVER
    const[error,setError] = useState('');
    const[code,setCode] = useState('');
    const getCode = async(e) => {
        e.preventDefault();
        try{
            await axios.get('https://heroku-test-afilliates.herokuapp.com/api/new_code').then(res => {
                setCode(res.data)
            })
          }
          catch(error){
            setError(error.message)
      
          }
      
        }

    const handleSubmit =(e) => {
        e.preventDefault();
       let first_name = e.target['first_name'].value.trim()
       let last_name = e.target['last_name'].value.trim()
       let  church = e.target['church'].value.trim()

       if (first_name=== ''||last_name=== ''||church=== ''||code === '' ) {
            setError('All fields are required..')

       }else{

       
       try{
           
           axios.post('https://heroku-test-afilliates.herokuapp.com/api/new_user',{
               first_name,
               last_name,
               church,
               code
            }).then(response =>{
                console.log(response.data)
            })
            
        }catch(error){
            console.error(error)
        }
    }
        

    }
       
       

    
  return (
    <Container>
        <form id="afilliate_create_form" onSubmit={(e)=>{handleSubmit(e)}} >
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
            <Submit type='submit' form='afilliate_create_form'>Submit</Submit><Error>{error}</Error>
            </InputContainer>
            
            
            <form id='code_generator' onSubmit={(e)=> getCode(e)}/>           

            
    </Container>
  )
}

export default AfilliateForm