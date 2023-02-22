import { useState } from 'react';

//Components
import PlayerListRow from './PlayerListRow';
import PlayerListHeader from './PlayerListHeader';

//Styles
import { PlayersListContainer } from './PlayerList.styles';



const PlayerList = (props: any) => {
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

export default PlayerList;