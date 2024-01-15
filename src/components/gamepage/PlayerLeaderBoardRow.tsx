import styled from "styled-components";
import { playerLeaderBoardRowStyle } from "./PlayerLeaderBoardRow.styles";

const PlayerLeaderBoardRow = (props: any) => {
  const { currentUser, leagueUsers } = props;

  let style = {};
  if (leagueUsers.username === currentUser.username) {
    style = playerLeaderBoardRowStyle;
  }

  return (
    <>
    {leagueUsers.map((player: any) => {
      return <LeaderBoardRow key={leagueUsers.username} style={style}>
        <td>{player.username}</td>
        <td>{player.pick}</td>
        <td>{player.weekly_diff}</td>
        <td>{player.league_diff}</td>
    </LeaderBoardRow>})}
    </>
  )
};

const LeaderBoardRow = styled.tr`
font-weight: bolder;
color: black;
backgroundColor: green;
`

export default PlayerLeaderBoardRow;
