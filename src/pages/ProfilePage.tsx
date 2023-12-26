import React from "react";
import styled from "styled-components";
import ProfileNavBar from "../components/profile/ProfileNavBar";

export default function ProfilePage(props: any) {
  return (
    <>
      <ProfileContainer>
        <Headline>{props.user.username}'s Player Profile</Headline>
        <ProfileNavBar user={props.user} />
        <br></br>
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

const Headline = styled.h1`
color: orange;
margin-bottom: 50px;

`
