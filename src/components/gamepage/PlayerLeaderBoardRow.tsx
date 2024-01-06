
import { playerLeaderBoardRowStyle } from "./PlayerLeaderBoardRow.styles";

const PlayerLeaderBoardRow = (props: any) => {
  const { user, currentUser } = props;


  let style = {};
  if (user.username === currentUser.username) {
    style = playerLeaderBoardRowStyle
  }

  return (
    <tr key={user.username} style={style}>
      <td>{user.username}</td><td>{user.pick}</td><td>{user.league_diff}</td>
    </tr>
  );
};

export default PlayerLeaderBoardRow;
