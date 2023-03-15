import { useState } from 'react';

//Components
import Button from "@mui/material/Button";
import DisplayMessage from '../DisplayMessage';
import TextInputOutlined from '../TextInputOutlined';
import PasswordInputOutlined from '../PasswordInputOutlined';

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
      // console.log(response)
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

        <TextInputOutlined id="email" label="Email" value={email} setValue={setEmail}/>
        <PasswordInputOutlined value={password} setValue={setPassword} label="Set New Password"/>
        <Button variant="contained" type="submit">Update Password</Button>
        
        <DisplayMessage response={response} successMessage="Password Updated" open={open} setOpen={setOpen}/>
      </FormBox>
  
  )

}

export default ForgotPassword