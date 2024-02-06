// import { useState } from 'react';

// //Components
// import Filters from './Filters';
// import PlayerList from './PlayerList';
// import ShowInactiveCheckbox from './ShowInactiveCheckbox';
// import { Button } from '@mui/material';

// //Global functions
// import { fetchAdminUsers } from '../../functions';

//Admin functions
// import { filterUsers, getSortedUsers, eliminateUsers} from './functions';

// //Styles
// import { ActionsContainer, ActionsContainerBottomSection } from './Players.styles';



const Players = (props: any) => {
//   const [week, setWeek] = useState(1);
//   const [sort, setSort] = useState("username");
//   const [sortDirection, setSortDirection] = useState("asc");
//   const [filterPickValue, setFilterPickValue] = useState("");
//   const [filterUsernameValue, setFilterUsernameValue] = useState("");
//   const [eliminateUserList, setEliminateUserList] = useState([]);
//   const [showInactive, setShowInactive] = useState(false);

//   const { users, setUsers, token } = props;

//   const handleEliminate = async () => {
//     await eliminateUsers(token, eliminateUserList);
//     const updatedUsers = await fetchAdminUsers(token);
//     setUsers(updatedUsers);
//     setEliminateUserList([])
//   }

//   const filteredUsers = filterUsers(
//     users,
//     week,
//     filterPickValue,
//     filterUsernameValue,
//     showInactive
//   );
//   const sortedUsers = getSortedUsers(filteredUsers, sort, sortDirection);

  return (
    <>
      {/* <ActionsContainer>
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
      /> */}
    </>
  )
}

export default Players;