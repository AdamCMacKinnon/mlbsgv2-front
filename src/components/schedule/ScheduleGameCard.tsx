//Global functions
import { getDisplayTime } from "../../functions";

//Styles
import { GameContainer, TeamContainer } from "./ScheduleGameCard.styles";



const ScheduleGameCard = (props: any) => {
  const { game, team } = props;

  const timestamp = game.gameDate;
  const awayTeam = game.teams.away.team.name;
  const homeTeam = game.teams.home.team.name;
  const date = new Date(timestamp)

  const day = timestamp.substring(8, 10);
  const month = Number(timestamp.substring(5, 7));
  const year = game.gameDate.substring(0, 4);

  const dateDisplay = month + '/' + day + '/' + year;

  return (
    <GameContainer key={timestamp} home={homeTeam === team}>
      <div>
      <TeamContainer team={awayTeam === team}>{awayTeam}</TeamContainer>
      <TeamContainer team={homeTeam === team}>{homeTeam}</TeamContainer>
      </div>
      <div>
        <p>{dateDisplay}</p>
        <p>{getDisplayTime(date)}</p>
      </div>      
    </GameContainer>
  )
}

export default ScheduleGameCard;