import { UserPicksContainer, UserPicksList } from "./UserPicks.styles";

const UserPicks = (props: any) => {
  const { userPicks } = props;

  const reverseUserPicks = [...userPicks].reverse()

  return (
    <UserPicksContainer>
      <h3>Past Picks</h3>
      <UserPicksList>
        {reverseUserPicks.map((pick: any) => {
            return <li key={pick.week}>{pick.week}. {userPicks}</li>
        })}
      </UserPicksList>
    </UserPicksContainer>)
}

export default UserPicks;