import { useState } from 'react';

//Components
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import PasswordInput from '../PasswordInput';
import DisplayMessage from '../DisplayMessage';

//Global functions
import { updateUserInfo } from '../../functions';

//Styles
import { FormBox } from '../register/RegisterForm.styles';



const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let requestData = {
      email,
      password
    }
    if (email || password) {
      const response: any = await updateUserInfo(requestData);
      setOpen(true)
      console.log(response)
      setResponse(response);
      if (response.status === 200) {
        setPassword('');
      }
    } 
  }

  return(
      <FormBox
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h3>Reset Password</h3>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Email</InputLabel>
          <Input
            id="component-simple"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormControl>
        <PasswordInput password={password} setPassword={setPassword} />
        <Button variant="contained" type="submit">Update Password</Button>
        
        <DisplayMessage response={response} successMessage="Password Updated" open={open} setOpen={setOpen}/>
      </FormBox>
  
  )

}

export default ForgotPassword