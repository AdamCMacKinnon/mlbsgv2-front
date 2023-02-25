import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

//Components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

//Global functions
import { login, fetchUsers, getLoggedInUser } from '../../functions';

//Styles
import { FormBox, ErrorMessage } from './RegisterForm.styles'



const RegisterForm = (props: any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { setToken, setUsers, setUser } = props;

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try{
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/auth/register`, {
        "username": username,
        "password": password,
        "email": email.toLowerCase(),    
      });
      if (response.status === 201) {
        setUsername('')
        setEmail('')
        setPassword('')
        
        const loginResponse = await login(username, password);

        if (loginResponse.status === 201) {
          let token = loginResponse.data.accessToken;
          let users = await fetchUsers();

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

export default RegisterForm;