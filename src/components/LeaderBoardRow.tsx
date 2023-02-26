import { UserRow } from "./LeaderBoardRow.styles";

const LeaderBoardRow = (props: any) => {
  const { user } = props;

  return (
    <UserRow key={user.username} isactive={user.isactive}>
      <td>{user.rank}</td><td>{user.username}</td><td>{user.diff}</td>
    </UserRow>
  );
};

export default LeaderBoardRow;
