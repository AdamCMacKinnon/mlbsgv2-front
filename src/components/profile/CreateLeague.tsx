import Button from "@mui/material/Button";
import React, { useState } from "react";
import styled from "styled-components";
import DisplayMessage from "../DisplayMessage";
import TextInputOutlined from "../TextInputOutlined";
import { createPrivateLeague } from "../../functions";

export default function CreateLeague(props: any) {
  const { token, user } = props;
  const [apiResponse, setApiResponse] = useState({});
  const [open, setOpen] = useState(false);
  const [leagueName, setLeagueName] = useState("");

  const handleCreateLeague = async (e: any) => {
    e.preventDefault();

    const userEmail = user.email;

    const response: any = await createPrivateLeague(
      token,
      leagueName,
      userEmail
    );
    setApiResponse(response);
    if (!response) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <CreateLeagueContainer>
      <CreateLeagueHeader>
        Create your own custom league here!
        <ul>
          <li>You will be emailed a passcode (ensure your email is up to date)</li>
          <li>Share that passcode with anyone you'd like to join your league!</li>
        </ul>
      </CreateLeagueHeader>
      <CreateLeagueForm
        noValidate
        autoComplete="off"
        onSubmit={handleCreateLeague}
      >
        <TextInputOutlined
          label="Enter League Name"
          value={leagueName}
          setValue={setLeagueName}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
        <DisplayMessage response={apiResponse} open={open} setOpen={setOpen} />
      </CreateLeagueForm>
    </CreateLeagueContainer>
  );
}

const CreateLeagueContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  border-radius: 4px;
  padding: 10px;
`;

const CreateLeagueForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  gap: 10px;
`;

const CreateLeagueHeader = styled.div`
  font-weight: bold;
  margin-bottom: 15px;
  color: blue;
`;
