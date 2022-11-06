import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import styled from 'styled-components';
import axios from "axios";

export default function LoginForm(props: any) {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [errorMessage, setErrorMessage] = useState('');
const navigate = useNavigate();

// const { setToken } = props;

const handleSubmit = async () => {  
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/auth/login`, {
      username,
      password
    })
    if (response.status === 201) {
      setUsername('')
      setPassword('')
      setErrorMessage('')
      // setToken(response.data)
      navigate('/')
    }
  } catch (e) {
    console.log(e)
    console.log(username)
    console.log(password)
    if(e) {
      setErrorMessage('Invalid login');
    }
  }
}
  return (
    <Form
      noValidate
      autoComplete="off"
    >
      
        <TextField
          required
          id="outlined-required"
          label="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      <ErrorMessage>{errorMessage ? errorMessage : ' '}</ErrorMessage>
    </Form>
  );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 300px;
    gap: 10px;   
`

const ErrorMessage = styled.p`
  color: red;
  margin: 0 auto;
  height: 10px;
`
