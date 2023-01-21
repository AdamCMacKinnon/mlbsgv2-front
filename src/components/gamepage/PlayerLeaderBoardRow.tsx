
import { playerLeaderBoardRowStyle } from "./PlayerLeaderBoardRow.styles";

const PlayerLeaderBoardRow = (props: any) => {
  const { user, currentUser } = props;

  let style = {};
  if (user.username === currentUser.username) {
    style = playerLeaderBoardRowStyle
  }

  return (
    <tr key={user.username} style={style}>
      <td>{user.rank}</td><td>{user.username}</td><td>{user.diff}</td>
    </tr>
  );
};

export default PlayerLeaderBoardRow;
