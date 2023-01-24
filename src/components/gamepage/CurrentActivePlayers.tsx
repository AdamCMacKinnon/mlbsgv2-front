import { CurrentActivePlayersContainer } from "./CurrentActivePlayers.styles";

const CurrentActivePlayers = (props: any) => {
  const { users } = props;

  const currentActiveUsers = users.filter((user: any) => user.isactive ).length;

  return(
    <CurrentActivePlayersContainer>
      <p className="active-heading">Current Active Players:</p>
      <p className="active-player-number">{currentActiveUsers}</p>
    </CurrentActivePlayersContainer>
  )
}

export default CurrentActivePlayers;