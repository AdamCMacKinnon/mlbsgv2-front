import React, { useState } from "react";
import styled from "styled-components";
import PlayerManagementForm from "./PlayerManagementForm";
import Button from "@mui/material/Button";

// SHOULD I MOVE THE ROW UP TO HERE, AND THAT WAY PASS DOWN THE PROPS TO THE FORM?

export default function PlayerManagement(props: any) {
  const [open, setOpen] = useState(false);
  const [focusUser, setFocusUser] = useState('');
  const { leagueUsers, token } = props;

  const uniqueUsers = leagueUsers.filter((obj: { userId: any; }, index: any) => {
    return index === leagueUsers.findIndex((u: { userId: any; }) => obj.userId === u.userId);
});
  return (
    <PlayerManageContainer>
      <PlayerManageTable>
        <thead>
          <tr>
            <TableHeader>User Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Total Diff</TableHeader>
          </tr>
        </thead>
        <PlayerManageBody>
          {uniqueUsers.map((user: any) => {
            return (
              <PlayerRow>
                <td>
                  <Button variant="text" color="secondary" onClick={() => {
                    setOpen(true);
                    setFocusUser(user);
                  }}>
                    {user.username}
                  </Button>
                </td>
                <td>{user.email}</td>
                <td>{user.active === true ? "ACTIVE" : "INACTIVE"}</td>
                <td>{user.league_diff}</td>
              </PlayerRow>
            );
          })}
        </PlayerManageBody>
      </PlayerManageTable>
      {open === false ? <h2 style={{color: "white", marginTop: "30px"}}>Select a Player to Edit</h2> : <PlayerManagementForm user={focusUser} leagueUsers={leagueUsers} token={token} />}
    </PlayerManageContainer>
  );
}

const PlayerManageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin: auto;
`;

const PlayerManageTable = styled.table`
  width: 80%;
  background-color: lightgray;
  border-radius: 3px;
  padding: 10px;
`;

const PlayerManageBody = styled.tbody`
  text-align: center;
`;

const TableHeader = styled.th`
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  color: forestgreen;
`;

const PlayerRow = styled.tr`
  color: black;
`;
