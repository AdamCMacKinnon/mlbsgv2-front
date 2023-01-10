import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
import axios from "axios";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { login, fetchUsers, getLoggedInUser } from '../../functions';



export default function FormPropsTextFields(props: any) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { setToken, setUsers, setUser } = props;

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const currentDate = new Date();
    const isoDate = currentDate.toISOString();

    try{
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/auth/register`, {
        "username": username,
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
        setUsername('')
        setEmail('')
        setPassword('')
        
        const loginResponse = await login(username, password);

        if (loginResponse.status === 201) {
          let token = loginResponse.data.accessToken;
          let users = await fetchUsers(token);

          setToken(token)
          setUsers(users);

          let user = await getLoggedInUser(token)

          setUser(user);
          navigate('/gamePage');
        }
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
      onSubmit={handleSubmit}
    >
      <ErrorMessage>{errorMessage && errorMessage}</ErrorMessage>
        <TextField
          required
          id="outlined-required"
          label="User Name"
          value={username}
          onChange={e => setUsername(e.target.value)}
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
      <Button variant="contained" type="submit">Submit</Button>
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