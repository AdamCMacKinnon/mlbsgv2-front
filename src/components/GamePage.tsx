import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CurrentActivePlayers from './gamepage/CurrentActivePlayers';
import SelectTeam from './gamepage/SelectTeam';
import SelectedTeam from './gamepage/SelectedTeam';
import UserPicks from './gamepage/UserPicks';

import { teams } from '../data/teams';



export default function GamePage(props: any) {
  const [userPicks, setUserPicks] = useState([]);
  const [selectTeams, setSelectTeams] = useState(teams)
  const [selectedTeam, setSelectedTeam] = useState({})

  const userId = 'b38b0b59-d6a3-44a5-9766-178148937311'

  useEffect(() => {
    async function getUserPicks(){
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/picks/getpick/${userId}`)
      setUserPicks(response.data[0].picks);
      setPickTeams(response.data[0].picks);
    }
    getUserPicks()

    async function setPickTeams(pickedTeams: any) {
      const pickTeams = teams.filter(team => !pickedTeams.includes(team.name))
      setSelectTeams(pickTeams)
    }
  }, [])

  return (
    <GamePageContainer>
      <h1>ACTIVE</h1>
      <CurrentActivePlayers />
      <GamePageComponents>
        <Section>
          <SelectedTeam selectedTeam={selectedTeam}/>
        </Section>
        <Section>
          <SelectTeam selectTeams={selectTeams} setSelectedTeam={setSelectedTeam} />
        </Section>
        <Section>
          <UserPicks userPicks={userPicks}/>
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