import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React from "react";
import styled from "styled-components";

export default function PlayerManagementForm(props: any) {
  const { user, leagueUsers } = props;

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
            defaultValue={user.active === 'ACTIVE' ? 20 : 10}
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
        {/* <tr>
            <td>Atlanta Braves</td>
            <td>1</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Miami Marlins</td>
            <td>2</td>
            <td>10</td>
        </tr> */}
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
