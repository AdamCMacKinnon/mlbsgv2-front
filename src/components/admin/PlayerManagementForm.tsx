import { InputLabel, Menu } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React from "react";
import styled from "styled-components";
import PickTeam from "../gamepage/PickTeam";

export default function PlayerManagementForm(props: any) {
  const { user } = props;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("CLICKED UPDATE");
  };
  const handleDelete = async (e: any) => {
    e.preventDefault();
    console.log("CLICKED DELETE");
  };
  return (
    <PlayerFormContainer>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <FormTextRow>
        <TextField
            autoComplete="given-name"
            name="userName"
            id="userName"
            label="User Name"
            value={user.username}
            disabled={true}
            autoFocus
            sx={{width: "40%"}}
          />
                  <TextField
            autoComplete="given-name"
            name="email"
            id="email"
            label="User Email"
            value={user.email}
            disabled={true}
            autoFocus
            sx={{width: "50%"}}
          />
        </FormTextRow>
        <SelectorRow>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Status"
            defaultValue={user.active === 'ACTIVE' ? 20 : 10}
            sx={{width: "20%"}}
          >
            <MenuItem value={10}>
              Active
            </MenuItem>
            <MenuItem value={20}>Inactive</MenuItem>
          </Select>
        </SelectorRow>
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="success"
        onClick={handleSubmit}
        sx={{ 
            padding: "5px",
            margin: "10px"
        }}
      >
        Update Player
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="error"
        onClick={handleDelete}
        sx={{ 
            padding: "5px",
            margin: "10px"
        }}
      >
        Remove Player
      </Button>
    </PlayerFormContainer>
  );
}

const PlayerFormContainer = styled.div`
  margin-top: 40px;
  background-color: lightgray;
  width: 80%;
`;

const FormTextRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 15px;
`;

const SelectorRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 15px;
`