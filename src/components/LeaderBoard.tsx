import { useState, useEffect} from 'react';

//Components
import LeaderBoardRow from './LeaderBoardRow';

//Global function
import { fetchTotalUserDiff } from "../functions";

//GamePage functions
import { getRankings } from './gamepage/functions';

//Styles
import { PlayerLeaderBoardTable } from './gamepage/PlayerLeaderBoard.styles';
import { LeaderBoardContainer, LeaderBoardTableBody } from './LeaderBoard.styles';



const LeaderBoard = (props: any) => {
  const [users, setUsers] = useState<{rank: string, username: string, diff: number}[]>([]);
  
  useEffect(() => {
    const getUsers = async () => {
      const userList = await fetchTotalUserDiff()
      const rankedUsers: any = await getRankings(userList);
      setUsers(rankedUsers);
    }
    getUsers();
  }, [])


  return (
    <LeaderBoardContainer>
      <h3>First Run 2023 <b>FINAL STANDINGS</b></h3>
      <PlayerLeaderBoardTable>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Diff</th>
          </tr>
        </thead>
        <LeaderBoardTableBody>
        {users.map((user: any) => {
           return <LeaderBoardRow key={user.username} user={user} />;
           })}
       </LeaderBoardTableBody>
      </PlayerLeaderBoardTable>
    </LeaderBoardContainer>
  );
};

export default LeaderBoard;