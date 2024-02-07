import PlayerLeaderBoardRow from "./PlayerLeaderBoardRow";

import { PlayerLeaderBoardContainer, PlayerLeaderBoardTable } from './PlayerLeaderBoard.styles';

const PlayerLeaderBoard = (props: any) => {
  const { currentUser, leagueUsers, currentWeek } = props;
  return (
    <PlayerLeaderBoardContainer>
      <h3>Week {currentWeek} LeaderBoard</h3>
      <PlayerLeaderBoardTable>
        <thead>
          <tr>
            <th>Username</th>
            <th>Current Pick</th>
            <th>Current Week Diff</th>
            <th>Overall Diff</th>
          </tr>
        </thead> 
        <tbody>
          <PlayerLeaderBoardRow currentUser={currentUser} leagueUsers={leagueUsers} currentWeek={currentWeek}/>
       </tbody>
      </PlayerLeaderBoardTable>
    </PlayerLeaderBoardContainer>
  );
};

export default PlayerLeaderBoard;


