import { UserPicksContainer, UserPicksList } from "./UserPicks.styles";

const UserPicks = (props: any) => {
  const { userPicks } = props;

  return (
    <UserPicksContainer>
      <h3>Past Picks</h3>
      <UserPicksList>
        {userPicks.map((pick: any) => {
            return <li>{pick}</li>
        })}
      </UserPicksList>
    </UserPicksContainer>)
}

export default UserPicks;