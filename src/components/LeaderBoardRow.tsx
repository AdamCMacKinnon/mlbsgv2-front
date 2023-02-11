const LeaderBoardRow = (props: any) => {
  const { user } = props;

  return (
    <tr key={user.username}>
      <td>{user.rank}</td><td>{user.username}</td><td>{user.diff}</td>
    </tr>
  );
};

export default LeaderBoardRow;
