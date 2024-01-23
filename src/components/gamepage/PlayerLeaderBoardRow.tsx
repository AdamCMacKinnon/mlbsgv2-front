import styled from "styled-components";

const PlayerLeaderBoardRow = (props: any) => {
  const { leagueUsers } = props;

  return (
    <>
    {leagueUsers.map((player: any) => {
      return <LeaderBoardRow key={leagueUsers.username} >
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
