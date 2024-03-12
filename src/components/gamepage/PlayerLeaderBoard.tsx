import PlayerLeaderBoardRow from "./PlayerLeaderBoardRow";
import InfoIcon from '@mui/icons-material/Info';

import { PlayerLeaderBoardContainer, PlayerLeaderBoardTable, LeaderBoardHeader } from './PlayerLeaderBoard.styles';
import Tooltip from "@mui/material/Tooltip";

const PlayerLeaderBoard = (props: any) => {
  const { currentUser, leagueUsers, currentWeek } = props;

  return (
    <PlayerLeaderBoardContainer>
      <LeaderBoardHeader>
      <h3>LeaderBoard</h3>
      <Tooltip title="Weekly Diff updates every 7 minutes.  Overall updates once weekly." placement="right">
                <InfoIcon style={{marginTop: '14px', marginLeft: '10px'}}/>
              </Tooltip>
      </LeaderBoardHeader>
      <PlayerLeaderBoardTable>
        <thead>
          <tr>
            <th>Username</th>
            <th>Status</th>
            <th>Current Pick</th>
            <th>Week {currentWeek} Diff</th>
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


