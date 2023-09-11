import { useState } from 'react';

//Components
import Button from "@mui/material/Button";
import DisplayMessage from '../DisplayMessage';
import TextInputOutlined from '../TextInputOutlined';

//Global functions
import { resetPassword } from '../../functions';

//Styles
import { FormBox } from '../register/RegisterForm.styles';



const ForgotPassword = (props: any) => {
  const [email, setEmail] = useState('');
  const [username, setusername] = useState('');
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let requestData = {
      email,
      username,
    }
    if (email) {
      const response: any = await resetPassword(requestData);
      setOpen(true)
      setResponse(response);
      console.log(response);
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
        <TextInputOutlined id="username" label="Username" value={username} setValue={setusername}/>
        <Button variant="contained" type="submit">Request Temporary Password</Button>
        <DisplayMessage response={response} open={open} setOpen={setOpen}/>
      </FormBox>
  
  )

}

export default ForgotPassword