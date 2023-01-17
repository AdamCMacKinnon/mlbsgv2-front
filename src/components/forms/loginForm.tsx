import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import styled from 'styled-components';
import axios from "axios";


import { fetchUsers, fetchAdminUsers, getLoggedInUser } from '../../functions';

export default function LoginForm(props: any) {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [errorMessage, setErrorMessage] = useState('');

const { setToken, setUsers, setUser } = props;

const navigate = useNavigate();

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

      let token = response.data.accessToken;
      let users;

      setToken(token)
      
      let user = await getLoggedInUser(token)

      setUser(user);
      if (user.role === 'admin') {
        navigate('/admin');
        users = await fetchAdminUsers(token);
      }
      else{
        navigate('/gamePage');
        users = await fetchUsers(token);
      }
      
      setUsers(users);
    }
  } catch (e: any) {
    console.log(e);
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
