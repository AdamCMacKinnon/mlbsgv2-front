import PlayerLeaderBoardRow from "./PlayerLeaderBoardRow";

import { PlayerLeaderBoardContainer, PlayerLeaderBoardTable } from './PlayerLeaderBoard.styles';

import { useEffect, useState } from "react";
import { getLeagueLevelUsers } from "../../functions";

const PlayerLeaderBoard = (props: any) => {
  const { currentUser, leagueid, token } = props;
  const [leagueUsers, setLeagueUsers] = useState<{userId: string, username: string, week: any, pick: any, weekly_diff: any, league_diff: number}[]>([]);


  useEffect(() => {
    const leagueUsers = async (leagueid: string, token: string) => {
      const userList: any = await getLeagueLevelUsers(leagueid, token);
      setLeagueUsers(userList.data);
    }
    leagueUsers(leagueid,token);
  },[leagueid, token])

  return (
    <PlayerLeaderBoardContainer>
      <h3>LeaderBoard</h3>
      <PlayerLeaderBoardTable>
        <thead>
          <tr>
            <th>Username</th>
            <th>Current Pick</th>
            <th>Overall Diff</th>
          </tr>
        </thead> 
        <tbody>
          {leagueUsers.map((user: any) => {
          return <PlayerLeaderBoardRow key={user.username} user={user} currentUser={currentUser} />;
          })}
       </tbody>
      </PlayerLeaderBoardTable>
    </PlayerLeaderBoardContainer>
  );
};

export default PlayerLeaderBoard;


