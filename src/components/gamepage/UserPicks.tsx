import { UserPicksContainer, UserPicksList } from "./UserPicks.styles";

const UserPicks = (props: any) => {
  const { userPicks } = props;

  const reverseUserPicks = [...userPicks].reverse()

  return (
    <UserPicksContainer>
      <h3>Past Picks (By Week)</h3>
      <UserPicksList>
        {reverseUserPicks.map((pick: any) => {
            return <li key={pick.week}>{pick.week}. {pick.pick}</li>
        })}
      </UserPicksList>
    </UserPicksContainer>)
}

export default UserPicks;