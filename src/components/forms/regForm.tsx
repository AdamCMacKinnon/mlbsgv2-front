import { useState } from "react";
import styled from "styled-components"
import axios from "axios";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";



export default function FormPropsTextFields() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const currentDate = new Date();
    const isoDate = currentDate.toISOString();

    try{
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/auth/register`, {
        "username": userName,
        "password": password,
        "email": email.toLowerCase(),
        "isactive": true,
        "admin": false,
        "pastchamp": false,
        "diff": 0,
        "createdAt": isoDate,
        "updatedAt": isoDate        
      })
      if (response.status === 201) {
        setUserName('')
        setEmail('')
        setPassword('')
        alert('User successfully created');
      }
    } catch (e : any) {
      console.log(e.response.data.message)
      setErrorMessage(e.response.data.message)
    }
  }

  
  return (
    <FormBox
      noValidate
      autoComplete="off"
    >
      <ErrorMessage>{errorMessage && errorMessage}</ErrorMessage>
        <TextField
          required
          id="outlined-required"
          label="User Name"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <TextField
          id="outline"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      <Button variant="contained" onClick={e => handleSubmit(e)}>Submit</Button>
    </FormBox>
  );
}

const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 300px;
    gap: 10px;   
`

const ErrorMessage = styled.div`
  color: red;
  margin: 0 auto;
`