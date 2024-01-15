import { useState } from "react";
import { useNavigate } from 'react-router-dom';

//Components
import Button from "@mui/material/Button";
import TextInputOutlined from "../TextInputOutlined";
import PasswordInputOutlined from "../PasswordInputOutlined";
import DisplayMessage from "../DisplayMessage";

//Global functions
import { fetchUsers, fetchAdminUsers, getLoggedInUser, resetStateValues, login } from '../../functions';

//Styles
import { Form } from './LoginForm.styles';



const LoginForm = (props: any) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [apiResponse, setApiResponse] =  useState({});
  const [open, setOpen] = useState(false);

  const { setToken, setUsers, setUser, stayLoggedIn } = props;

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {  
    e.preventDefault();

    const response: any = await login(username, password);
    setApiResponse(response);

      if (response.status === 201) {
        resetStateValues([setUsername, setPassword]);

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
        else {  
          users = await fetchUsers();
          navigate('/profile');
        } 
        setUsers(users);
      }
      else {
        setOpen(true);
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
      <DisplayMessage response={apiResponse} open={open} setOpen={setOpen} />
    </Form>
  );
}

export default LoginForm;