import { Button } from '@mui/material';
import { useState } from 'react';

import styled from 'styled-components';

import Filters from './Filters';
import PlayerList from './PlayerList';
import ShowInactiveCheckbox from './ShowInactiveCheckbox';

import { eliminateUsers, fetchAdminUsers } from '../../functions';
import { filterUsers, getSortedUsers} from './functions';

export default function Players(props: any) {
  const [week, setWeek] = useState(1);
  const [sort, setSort] = useState("username");
  const [sortDirection, setSortDirection] = useState("asc");
  const [filterPickValue, setFilterPickValue] = useState("");
  const [filterUsernameValue, setFilterUsernameValue] = useState("");
  const [eliminateUserList, setEliminateUserList] = useState([]);
  const [showInactive, setShowInactive] = useState(false);

  const { users, setUsers, token } = props;

  const handleEliminate = async () => {
    await eliminateUsers(token, eliminateUserList);
    const updatedUsers = await fetchAdminUsers(token);
    setUsers(updatedUsers);
    setEliminateUserList([])
  }

  const filteredUsers = filterUsers(
    users,
    week,
    filterPickValue,
    filterUsernameValue,
    showInactive
  );
  const sortedUsers = getSortedUsers(filteredUsers, sort, sortDirection);

  return (
    <>
      <ActionsContainer>
        <Filters
          week={week}
          setWeek={setWeek}
          filterPickValue={filterPickValue}
          setFilterPickValue={setFilterPickValue}
          filterUsernameValue={filterUsernameValue}
          setFilterUsernameValue={setFilterUsernameValue}
          showInactive={showInactive}
          setShowInactive={setShowInactive}
        />
        <ActionsContainerBottomSection>
          <ShowInactiveCheckbox showInactive={showInactive} setShowInactive={setShowInactive} />
          <Button variant="contained" size="small" onClick={handleEliminate}>Eliminate</Button>
        </ActionsContainerBottomSection>

      </ActionsContainer>

      <PlayerList
        users={sortedUsers}
        sort={sort}
        setSort={setSort}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        setEliminateUserList={setEliminateUserList}
      />
    </>
  )
}

const ActionsContainer = styled.div`
  background-color: white;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px;
  border-radius: 5px;

  button {
    background-color: rgba(6,128,55);
  }
`

const ActionsContainerBottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 5px 10px;
  width: 100%;

  button {
    margin: 0 5px;
  }
`