import { useState } from 'react';

import styled from 'styled-components';

import PlayerListRow from './PlayerListRow';
import PlayerListHeader from './PlayerListHeader';


export default function PlayerList(props: any) {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState<{ isChecked: string }[]>([]);

  const { users, sort, setSort, sortDirection, setSortDirection, setEliminateUserList  } = props;

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(users.map((user: any) => user.username));
    setEliminateUserList(users.map((user: any) => user.username))
    if (isCheckAll) {
      setIsCheck([]);
      setEliminateUserList([])
    }
  };

  const handleClick = (e: any) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    setEliminateUserList([...isCheck, id])
    if (!checked) {
      setIsCheck(isCheck.filter((user) => user !== id));
      setEliminateUserList(isCheck.filter((user) => user !== id))
    }
  };

  return (
    <>
      <PlayersListContainer>
        <PlayerListHeader 
              sort={sort}
              setSort={setSort}
              sortDirection={sortDirection}
              setSortDirection={setSortDirection}
              handleSelectAll={handleSelectAll}
              isCheckAll={isCheckAll}
        />

        <tbody>
          {users.map((user:any) => {
            return(
              <PlayerListRow 
                user={user} 
                isChecked={isCheck} 
                handleClick={handleClick}
                key={user.id} 
              />
            )})}
        </tbody>
      </PlayersListContainer>
    </>
  )
}

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