import { Button } from '@mui/material';
import { useState } from 'react';

import styled from 'styled-components';

import PlayerListRow from './PlayerListRow';
import WeekSelection from './WeekSelection';

import { eliminateUsers, fetchAdminUsers, filteredUsersByWeek } from '../../functions';

export default function PlayerList(props: any) {
  const [week, setWeek] = useState(1);
  const [eliminateUserList, setEliminateUserList] = useState([]);

  const { users, setUsers, token } = props;

  const handleEliminate = async () => {
    await eliminateUsers(token, eliminateUserList);
    const updatedUsers = await fetchAdminUsers(token);
    setUsers(updatedUsers);
  }

  const usersFilteredByWeek = filteredUsersByWeek(users, week);

  const displayUsers = usersFilteredByWeek;

  return (
    <>
      <ActionsContainer>
        <div>
          <WeekSelection setWeek={setWeek}/>
        </div>
        <Button variant="contained" size="small" onClick={handleEliminate}>Eliminate</Button>
      </ActionsContainer>

      <PlayersListContainer>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Diff</th>
            <th>Week Pick</th>
            <th>Elim</th>
          </tr>
        </thead>

        <tbody>
          {displayUsers.map((user:any) => {
            return(
              <PlayerListRow 
                user={user} 
                setEliminateUserList={setEliminateUserList} 
                eliminateUserList={eliminateUserList} 
                key={user.id} 
                allChecked={false}
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
  align-items: center;
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
    text-align: center;
  }
  td {
    height: 20px;
  }
  tbody tr:nth-child(odd) {
    background-color: lightgrey;

    :hover {
      background-color: green;
      color: white;
    }
  }
  tbody tr:hover {
    color: white;
    background-color: green;
  }
`