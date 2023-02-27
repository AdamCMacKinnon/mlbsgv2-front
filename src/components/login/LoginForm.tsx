import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

//Components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

//Global functions
import { fetchUsers, fetchAdminUsers, getLoggedInUser } from '../../functions';

//Styles
import { Form, ErrorMessage } from './LoginForm.styles';



const LoginForm = (props: any) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const { setToken, setUsers, setUser, stayLoggedIn } = props;

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
      
        if (stayLoggedIn) {
          localStorage.setItem('token', token);
        }

        let user = await getLoggedInUser(token)

        setUser(user);
        if (user.role === 'admin') {
          navigate('/admin');
          users = await fetchAdminUsers(token);
        }
        else{  
          users = await fetchUsers();
          navigate('/gamePage');
        } 
        setUsers(users);
      }
      else {
        setErrorMessage('Invalid login');
      }
    } catch (e: any) {
      console.log(e)
      if (e.code === 'ERR_NETWORK') {
        setErrorMessage('Network Error');
      } 
      else {
          setErrorMessage('Invalid login');
      }     
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

export default LoginForm;