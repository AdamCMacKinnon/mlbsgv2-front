import { useState } from 'react';

//Components
import DatePicker from '../components/DatePicker';
import SelectTeamFilter from '../components/admin/SelectTeamFilter';

//Global functions
import {displaySchedule} from '../functions/index';

//Styles
import { ScheduleContainer, FilterContainer, GameListContainer} from './Schedule.styles';
import ScheduleGameCard from '../components/schedule/ScheduleGameCard';



const Schedule = (props: any) => {
  const { dates } = props;
  console.log(dates);
  const [dateFrom, setDateFrom] = useState(dates.start_date.split('T')[0]);
  const [dateTo, setDateTo] = useState(dates.end_date.split('T')[0]);
  const [team, setTeam] = useState('None');
  const schedule = displaySchedule(dateFrom, dateTo, team);

  const displayScheduleGames = schedule.length > 0 ? schedule.map((game: any) => <ScheduleGameCard team={team} game={game} key={game.gamePk}/>) : (<p style={{color: 'white'}}>No games for this time period</p>);
  return (
    <ScheduleContainer>
      <FilterContainer>
        <DatePicker label="Date From" date={dateFrom} setDate={setDateFrom}/>
        <DatePicker label="Date To" date={dateTo} setDate={setDateTo}/>
        <SelectTeamFilter filterPickValue={team} setFilterPickValue={setTeam}/>
        <div className="homeaway">
          <div className="home"></div>
          Home 
          <div className="away"></div>
          Away
        </div>
        <p><i>**Schedule does not account for postponed or makeup games**</i></p>
      </FilterContainer>
      <GameListContainer>
        {displayScheduleGames} 
      </GameListContainer>
    </ScheduleContainer>
  )
}

export default Schedule;

