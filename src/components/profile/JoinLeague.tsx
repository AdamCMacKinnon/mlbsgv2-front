import React, { useState } from "react";
import { joinPrivateLeague } from "../../functions";
import { Button } from "@mui/material";
import DisplayMessage from "../DisplayMessage";
import TextInputOutlined from "../TextInputOutlined";
import styled from "styled-components";

export default function JoinLeague(props: any) {
  const [apiResponse, setApiResponse] = useState({});
  const [open, setOpen] = useState(false);
  const [passcode, setPasscode] = useState("");

  const { token } = props;
  const handleJoinLeague = async (e: any) => {
    e.preventDefault();

    const response: any = await joinPrivateLeague(token, passcode);
    setApiResponse(response);
    if (!response) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <JoinLeagueContainer>
        <PasscodeHeader>
            To Join a private league you must be invited by that leagues commissioner.
        </PasscodeHeader>
      <JoinLeagueForm noValidate autoComplete="off" onSubmit={handleJoinLeague}>
        <TextInputOutlined
          label="Enter Passcode"
          value={passcode}
          setValue={setPasscode}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
        <DisplayMessage response={apiResponse} open={open} setOpen={setOpen} />
      </JoinLeagueForm>
    </JoinLeagueContainer>
  );
}

const JoinLeagueContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  border-radius: 4px;
`;

const PasscodeHeader = styled.div`
font-weight: bold;
margin-bottom: 15px;
color: blue;
`

const JoinLeagueForm = styled.form`
display: flex;
flex-direction: column;
width: 80%;
max-width: 300px;
gap: 10px;  
`
