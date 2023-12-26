import React from "react";
import styled from "styled-components";
import LeagueCard from "../components/profile/LeagueCard";
import ButtonRow from "../components/profile/ButtonRow";

export default function ProfilePage(props: any) {
  return (
    <>
      <ProfileContainer>
        <Headline>{props.user.username}'s Player Profile</Headline>
        <ButtonRow />
        <br></br>
        {props.user.subsUsers.length > 0 ? <LeagueCard user={props.user} /> 
        : <NullMessage>
          You haven't Joined any Leagues Yet!
          <br/>
          Join the Global League to start playing Now!
          </NullMessage>}
      </ProfileContainer>
    </>
  );
}

const ProfileContainer = styled.div`
  width: 80%;
  padding: 20px;
  color: rgb(6, 128, 55);
  border-radius: 30px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  justify-self: center;
  margin: 50px auto 0;
  text-align: center;
  vertical-align: center;
`;

const NullMessage = styled.h1`
color: white;
margin-top: 150px;
`

const Headline = styled.h1`
color: orange;
margin-bottom: 50px;

`
