import styled from "styled-components";

const PlayerLeaderBoardRow = (props: any) => {
  const { leagueUsers } = props;

// ADD A MAP OR FILTER FUNCTION TO DETERMINE WHICH WEEK IT IS.
// do the same for past picks, but just make it "teams selected"

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
