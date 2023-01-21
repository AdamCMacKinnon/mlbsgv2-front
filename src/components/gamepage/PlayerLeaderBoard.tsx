import PlayerLeaderBoardRow from "./PlayerLeaderBoardRow";

import { PlayerLeaderBoardContainer, PlayerLeaderBoardTable } from './PlayerLeaderBoard.styles';

import { topRankedUsers } from "./functions";

const PlayerLeaderBoard = (props: any) => {
  const {currentUser, users} = props;

  const displayUsers = topRankedUsers(users, currentUser);

  return (
    <PlayerLeaderBoardContainer>
      <h3>LeaderBoard</h3>
      <PlayerLeaderBoardTable>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Diff</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers.map((user: any) => {
          return <PlayerLeaderBoardRow key={user.username} user={user} currentUser={currentUser} />;
          })}
       </tbody>
      </PlayerLeaderBoardTable>
    </PlayerLeaderBoardContainer>
  );
};

export default PlayerLeaderBoard;


