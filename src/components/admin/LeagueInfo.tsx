import React from "react";
import { LeagueInfoContainer } from './LeagueInfo.styles';
import Box from "@mui/material/Box";

const LeagueInfo = () => {
  return (
    <LeagueInfoContainer>
      <Box 
      component="form"
      sx={{backgroundColor: "lightgray", color: "black", borderRadius: "25px"}}
      noValidate
      autoComplete="off"
      >
        <h1>LEAGUE INFO!</h1>
      </Box>
    </LeagueInfoContainer>
  );
};

export default LeagueInfo;
