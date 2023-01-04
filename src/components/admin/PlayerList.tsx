import { Button } from '@mui/material';
import { useState } from 'react';

import styled from 'styled-components';

import PlayerListRow from './PlayerListRow';

import { eliminateUsers, fetchAdminUsers } from '../../functions';

export default function PlayerList(props: any) {
  const [eliminateUserList, setEliminateUserList] = useState([]);

  const { users, setUsers, token } = props;

  const handleEliminate = async () => {
    await eliminateUsers(token, eliminateUserList);
    const updatedUsers = await fetchAdminUsers(token);
    setUsers(updatedUsers);
  }

  return (
    <>
      <ActionsContainer>
        <div>
          filter section
        </div>
        <Button variant="contained" size="small" onClick={handleEliminate}>Eliminate</Button>
      </ActionsContainer>

      <PlayersListContainer>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Diff</th>
            <th>Week Pick</th>
            <th>Set Inactive</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user:any) => {
            return(
              <PlayerListRow 
                user={user} 
                setEliminateUserList={setEliminateUserList} 
                eliminateUserList={eliminateUserList} 
                key={user.id} 
              />
            )})}
        </tbody>
      </PlayersListContainer>
    </>
  )
}

const ActionsContainer = styled.div`
  background-color: white;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  padding: 5px;

  button {
    background-color: rgba(6,128,55);
  }
`

const PlayersListContainer = styled.table`
  margin: 0 auto;
  background-color: white;
  width: 100%;
  padding: 5px;

  th {
    border-bottom: 1px solid;
    padding: 0 0 10px 0
  }
  td {
    height: 20px;
  }
  tbody tr:nth-child(odd) {
    background-color: lightgrey;
  }
`