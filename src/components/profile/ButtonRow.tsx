import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function ButtonRow() {
  return (
    <ButtonRowContainer>
      <Button sx={{margin: '10px'}} color="primary" className="pickButton" variant="contained">
        Join Private League
      </Button>
      <Button sx={{margin: '10px'}} color="error" className="pickButton" variant="contained">
        Join The Global League
      </Button>
      <Button sx={{margin: '10px'}} color="warning" className="pickButton" variant="contained">
        Create a League
      </Button>
    </ButtonRowContainer>
  );
}

const ButtonRowContainer = styled.div`
display: flex;
flex-direction: row;
@media only screen and (max-width: 750px) {
  flex-direction: column;
  justify-content-space-around;
}
justify-content: space-around;
background-color: lightgray;
padding: 15px;
border-radius: 3px;
`;
