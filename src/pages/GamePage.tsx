import styled from 'styled-components';

import ActiveBanner from '../components/gamepage/ActiveBanner';
import CurrentActivePlayers from '../components/gamepage/CurrentActivePlayers';
import PickTeam from '../components/gamepage/PickTeam';
import PlayerLeaderBoard from '../components/gamepage/PlayerLeaderBoard';
import SelectedTeam from '../components/gamepage/SelectedTeam';
import UserPicks from '../components/gamepage/UserPicks';

import { teams } from '../data/teams';



export default function GamePage(props: any) {
  const { user, setUser, token, users } = props;

  const userPickList: any = []
  user.picks?.forEach((pick: any) => userPickList.push(pick.pick));
  const pickTeams = teams.filter(team => !userPickList.includes(team.name))

  return (
    <GamePageContainer>
      <ActiveBanner user={user} />
      <CurrentActivePlayers users={users}/>
      <GamePageComponents>
        <Section>
          <SelectedTeam user={user}/>
        </Section>
        <Section>
          <PickTeam pickTeams={pickTeams} token={token} user={user} setUser={setUser} />
        </Section>
        <Section>
          <UserPicks userPicks={user.picks}/>
        </Section>
        <Section>
          <PlayerLeaderBoard currentUser={user} users={users}/>
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