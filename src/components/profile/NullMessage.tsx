import React from "react";
import styled from "styled-components";

export default function NullMessage() {
  return (
    <Message>
    <h1>
      You haven't Joined any Leagues Yet!
      <br />
      Join the Global League to start playing Now!
    </h1>
    </Message>
  );
}

const Message = styled.h1`
  color: white;
`;
