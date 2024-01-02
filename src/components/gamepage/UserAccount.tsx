import { useState } from "react";
import {useNavigate} from 'react-router-dom';

//Components
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import PasswordInput from "../PasswordInput";

//Global functions
import { updateUserInfo } from "../../functions";

//Styles
import { UserAccountContainer, ButtonContainer } from "./UserAccount.styles";



const UserAccount = (props: any) => {
  const { user, setUser } = props;
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let requestData;
    if(password) {
      requestData = {
        username: user.username,
        email,
        password
      }
    } else {
      requestData = {
        username: user.username,
        email
      }
    }

    if (email !==user.email || password) {

      const response: any = await updateUserInfo(requestData)

      if (response.status === 200) {
        setUser(response.data);
        setIsUpdated(true);
        setPassword('');
        console.log(response.data);
      } else {
        console.log(response.data.message);
      }
    } else {
      setIsUpdated(false);
    }
  }

  const handleGamePageClick = () => {
    navigate('/profile/gamepage');
  }

  return (
    <UserAccountContainer>
      <h3>Account Info</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" }
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Email</InputLabel>
          <Input
            id="component-simple"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormControl>
<PasswordInput password={password} setPassword={setPassword} />
        
      </Box>
      <ButtonContainer>
      <Button variant="contained" type="submit">Update Info</Button>
      {isUpdated ? (<p>Account Info Updated</p>): null}
      <Button color="success" onClick={handleGamePageClick}>
            Go to Game Page
          </Button>
      </ButtonContainer>
    </UserAccountContainer>
    
  )
} 

export default UserAccount;