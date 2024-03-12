import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import styled from "styled-components";
import { deleteUsers, eliminateUsers } from "./functions";

export default function PlayerManagementForm(props: any) {
  const { user, leagueUsers, token } = props;
  const [userForDelete, setUserForDelete] = useState('');
  const [userForUpdate, setUserForUpdate] = useState('');
  const [isactive, setIsActive] = useState(user.active);
  const [open, setOpen] = useState(false);
  const leagueid = user.league_id;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setUserForUpdate(user.userId);
    const response: any = await eliminateUsers(token, leagueid, userForUpdate, isactive);
    if (response) {
        setOpen(true);
    }
  };
  const handleDelete = async (e: any) => {
    e.preventDefault();
    setUserForDelete(user.userId);
    const response: any = await deleteUsers(userForDelete, leagueid, token);
    if (response === 'User Deleted') {
        setOpen(true);
    }
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
            sx={{width: "30%"}}
          />
                  <TextField
            autoComplete="given-name"
            name="email"
            id="email"
            label="User Email"
            value={user.email}
            disabled={true}
            autoFocus
            sx={{width: "40%", marginLeft: "10px"}}
          />
                  <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Status"
            defaultValue={user.active === 'ACTIVE' ? 10 : 20}
            onChange={(e) => setIsActive(e.target.value === 10 ? true : false)}
            sx={{width: "20%", marginLeft: "10px"}}
          >
            <MenuItem value={10}>
              Active
            </MenuItem>
            <MenuItem value={20}>Inactive</MenuItem>
          </Select>
        </FormTextRow>
      </Box>
      <FormRowTwo>
      <FocusUserPickList>
        <FocusUserTable>
        <thead>
            <PmTableRow>
                <PmTableHeader>Team</PmTableHeader>
                <PmTableHeader>Week</PmTableHeader>
                <PmTableHeader>Diff</PmTableHeader>
            </PmTableRow>
        </thead>
        {leagueUsers.map((u: any) => {
            if (u.userId === user.userId) {
                return (
                    <tr>
                        <td>{u.pick}</td>
                        <td>{u.week}</td>
                        <td>{u.weekly_diff}</td>
                    </tr>
                )
            } else {
                return null;
            }
        })}
        </FocusUserTable>
      </FocusUserPickList>
      <AdminButtonContainer>
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
      </AdminButtonContainer>
      </FormRowTwo>
      {open === true ? (<p style={{color: "darkblue"}}>Successful.  Refresh to see changes.</p>) : null}

    </PlayerFormContainer>
  );
}

const PlayerFormContainer = styled.div`
  margin-top: 40px;
  background-color: lightgray;
  width: 90%;
`;

const FormTextRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin: 10px;
`;

const AdminButtonContainer = styled.div`
display: flex;
flex-direction:column;
margin-left: auto;
width: 30%;
`;

const FocusUserPickList = styled.div`
margin-left: 10%;
width: 80%;
`;

const FormRowTwo = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`
const PmTableHeader = styled.th`
font-weight: bold;
text-decoration: underline;
color: white;
font-size: large;
padding-bottom: 5px;
text-align: center;
background-color: forestgreen;
`;

const FocusUserTable = styled.table`
    border: 1px solid;
    margin-bottom: 5px;
    width: 80%;
    text-align: center;
`

const PmTableRow = styled.tr`

`
