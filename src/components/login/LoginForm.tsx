import { useState } from "react";
import { useNavigate } from 'react-router-dom';

//Components
import Button from "@mui/material/Button";
import TextInputOutlined from "../TextInputOutlined";
import PasswordInputOutlined from "../PasswordInputOutlined";

//Global functions
import { fetchUsers, fetchAdminUsers, getLoggedInUser, resetStateValues, login } from '../../functions';

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

    const response: any = await login(username, password);

      if (response.status === 201) {
        resetStateValues([setUsername, setPassword, setErrorMessage]);

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
  }
  return (
    <Form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >      
      <TextInputOutlined      label='Username' 
      value={username} 
      setValue={setUsername}/>
      <PasswordInputOutlined 
      value={password}
      setValue={setPassword}/>
      <Button variant="contained" type="submit">Submit</Button>
      <ErrorMessage>{errorMessage ? errorMessage : ' '}</ErrorMessage>
    </Form>
  );
}

export default LoginForm;