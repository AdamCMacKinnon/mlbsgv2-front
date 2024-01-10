import styled from 'styled-components';

import ActiveBanner from '../components/gamepage/ActiveBanner';
import AlertMessage from '../components/AlertMessage';
import PickTeam from '../components/gamepage/PickTeam';
import PlayerLeaderBoard from '../components/gamepage/PlayerLeaderBoard';
import SelectedTeam from '../components/gamepage/SelectedTeam';
import UserPicks from '../components/gamepage/UserPicks';

import { teams } from '../data/teams';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLeagueLevelUsers } from '../functions';
import Spinner from '../components/gamepage/Spinner';


export default function GamePage(props: any) {
  const { user, setUser, token, users } = props;
  const location: any = useLocation();
  const { leagueid, leagueName } = location.state;
  const [loading, setLoading] = useState(true);
  const [leagueUsers, setLeagueUsers] = useState<{userId: string, username: string, week: any, pick: any, weekly_diff: any, league_diff: number}[]>([]);


  useEffect(() => {
    setTimeout(function () {
      const leagueUsers = async (leagueid: string, token: string) => {
        const userList: any = await getLeagueLevelUsers(leagueid, token);
        setLeagueUsers(userList.data);
      }
      leagueUsers(leagueid,token);
      setLoading(false);
    }, 800)
  },[leagueid, token]);
  
  const userPickList: any = []
  leagueUsers.forEach((pick: any) => userPickList.push(pick.pick));
  const pickTeams = teams.filter(team => !userPickList.includes(team.name))

  if (loading) {
    return (
      <GamePageContainer>
            <Spinner />
      </GamePageContainer>
  )}
  return (
    <GamePageContainer>
      <h1 style={{color: 'white'}}>{leagueName}</h1>
      <ActiveBanner user={user} />
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
        <LeaderBoardSection>
          <PlayerLeaderBoard currentUser={user} users={users} token={token} leagueid={leagueid} leagueUsers={leagueUsers}/>
        </LeaderBoardSection>
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
  margin: 50px auto 0 ;
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

const LeaderBoardSection = styled.div`
  width: 80%;
  margin: 20px;
  // background-color: rgba(0 , 43, 15, 0.8);
  background-color: rgba(255, 255, 255, 0.8);
  margin: 10px auto;
  border-radius: 5px;
  position: relative;
  padding: 15px;
`