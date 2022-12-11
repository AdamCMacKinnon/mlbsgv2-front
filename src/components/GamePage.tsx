import {useState} from 'react';
import styled from 'styled-components';

import CurrentActivePlayers from './gamepage/CurrentActivePlayers';
import PickTeam from './gamepage/PickTeam';
import SelectedTeam from './gamepage/SelectedTeam';
import UserPicks from './gamepage/UserPicks';

import { teams } from '../data/teams';



export default function GamePage(props: any) {
  const [selectedTeam, setSelectedTeam] = useState({})

  const { user } = props;

  const userPickList: any = []
  user.picks.forEach((pick: any) => userPickList.push(pick.pick));
  const pickTeams = teams.filter(team => !userPickList.includes(team.name))

  return (
    <GamePageContainer>
      <h1>ACTIVE</h1>
      <CurrentActivePlayers />
      <GamePageComponents>
        <Section>
          <SelectedTeam selectedTeam={selectedTeam}/>
        </Section>
        <Section>
          <PickTeam pickTeams={pickTeams} setSelectedTeam={setSelectedTeam} />
        </Section>
        <Section>
          <UserPicks userPicks={userPickList}/>
        </Section>
        <Section>
          <h2>Total Pick Distribution for Last Week:</h2>
        </Section>
      </GamePageComponents>     
    </GamePageContainer>
  )
}



const GamePageContainer = styled.div`
  width: 80%;  
  padding: 20px;
  color:rgb(6, 128, 55);
  border-radius: 30px;x
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  justify-self: center;
  margin: 0 auto;
  text-align: center;
`

const Section = styled.div`
  display: flex;
  height: 266px;
  width: 224px;
  max-width: 300px;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 20px;
  // background-color: rgba(0 , 43, 15, 0.8);
  background-color: rgba(255, 255, 255, 0.8);
  margin: 10px auto;
  border-radius: 5px;
  position: relative;
`

const GamePageComponents = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
`