import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

//Components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

//Global functions
import { login, getLoggedInUser } from '../../functions';

//Styles
import { FormBox, ErrorMessage } from './RegisterForm.styles'

const RegisterForm = (props: any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { setToken, setUser } = props;

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try{
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/auth/register`, {
        "username": username,
        "password": password,
        "email": email.toLowerCase(),    
      });
      if (response.status === 201) {
        setUsername('')
        setEmail('')
        setPassword('')
        setLoading(false);
        
        const loginResponse: any = await login(username, password);

        if (loginResponse.status === 201) {
          let token = loginResponse.data.accessToken;

          setToken(token)

          let user = await getLoggedInUser(token)

          setUser(user);
          navigate('/profile');
        }
      }
    } catch (e : any) {
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
          required
          id="outline-required"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      <Button variant="contained" type="submit">Submit</Button>
      {loading === true ? (<p>Completing your registration request...</p>) : null}
    </FormBox>
  );
}

export default RegisterForm;