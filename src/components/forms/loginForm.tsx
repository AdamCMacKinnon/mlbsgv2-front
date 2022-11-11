import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import styled from 'styled-components';
import axios from "axios";

export default function LoginForm() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [errorMessage, setErrorMessage] = useState('');
const [token, setToken] = useState('')
const navigate = useNavigate();

console.log(`Token: ${token}`)


const handleSubmit = async (e: any) => {  
  e.preventDefault();
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/auth/login`, {
      username,
      password
    })
    if (response.status === 201) {
      setUsername('')
      setPassword('')
      setErrorMessage('')
      console.log(response.data.accessToken)
      setToken(response.data.accessToken);
      navigate('/')
      
    }
  } catch (e: any) {
      setErrorMessage('Invalid login');
  }
}
  return (
    <Form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
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
      
      <Button variant="contained" type="submit">Submit</Button>
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
