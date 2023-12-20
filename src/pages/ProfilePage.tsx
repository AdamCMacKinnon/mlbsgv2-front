import React from "react";
import styled from "styled-components";
import LeagueCard from "../components/profile/LeagueCard";

export default function ProfilePage(props: any) {
  return (
    <>
      <ProfileContainer>
        <h1 style={{ color: "violet" }}>{props.user.username} League Menu</h1>
        <br></br>
        <LeagueCard user={props.user} />
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
