import React from "react";
import LeaderBoard from "../LeaderBoard";
import styled from "styled-components";
import { Button } from "@mui/material";

export default function GlobalLeague(props: any) {
  return (
    <>
            <Button variant="contained" color="secondary">JOIN THE GLOBAL LEAGUE</Button>
      <Header>
        <h3>Current Global League Standings:</h3>
      </Header>
      <LeaderBoard />
    </>
  );
}

const Header = styled.h1`
  color: white;
`;
