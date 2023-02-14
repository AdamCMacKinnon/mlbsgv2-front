import { useState } from "react";
import axios from 'axios';

//Components
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

//Styles
import { UserAccountContainer } from "./UserAccount.styles";

const UserAccount = (props: any) => {
  const { user, setUser, token } = props;
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (username !== user.username || email !==user.email) {
      try {
        const response = await axios.patch(`${process.env.REACT_APP_SERVER}/auth/update/${user.id}`, {
          username,
          email
        },{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.data;
        setUser(data);
        setIsUpdated(true);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsUpdated(false);
    }
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
          <InputLabel htmlFor="component-simple">Username</InputLabel>
          <Input
            id="component-simple"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Email</InputLabel>
          <Input
            id="component-simple"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormControl>

        <Button variant="contained" type="submit">Update Info</Button>
      </Box>
      {isUpdated ? (<p>Account Info Updated</p>): null}
      <Button color="success" href="/">
            Go to Game Page
          </Button>
    </UserAccountContainer>
    
  )
} 

export default UserAccount;