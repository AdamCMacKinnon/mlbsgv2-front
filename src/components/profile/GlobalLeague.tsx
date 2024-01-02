import React, { useState } from "react";
import LeaderBoard from "../LeaderBoard";
import styled from "styled-components";
import { Button } from "@mui/material";
import { enterGlobalLeague } from "../../functions";
import DisplayMessage from "../DisplayMessage";

export default function GlobalLeague(props: any) {
  const [apiResponse, setApiResponse] = useState({});
  const [open, setOpen] = useState(false);

  const { token } = props;
  const handleGlobalEntry = async (e: any) => {
    const response: any = await enterGlobalLeague(token);
    setApiResponse(response);
    if (!response) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <>
      <Button
        onClick={handleGlobalEntry}
        variant="contained"
        color="error"
        sx={{ padding: "10px", marginBottom: "10px" }}
      >
        JOIN THE GLOBAL LEAGUE
      </Button>
      <br />
      <DisplayMessage response={apiResponse} open={open} setOpen={setOpen} />
      <Header>
        <h3>Current Global League Standings:</h3>
      </Header>
      <LeaderBoard />
    </>
  );
}

const Header = styled.h3`
  color: white;
`;
