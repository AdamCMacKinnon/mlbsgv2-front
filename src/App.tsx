import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';

import Admin from './components/Admin'
import PickList from './components/admin/PickList';
import GamePage from './components/GamePage';
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import NavBar from './components/NavBar';
import PlayerList from './components/admin/PlayerList';
import Register from './components/Register'

import { picksData } from './data/picks';
import { usersData } from './data/users';
import Eliminate from './components/admin/Eliminate';
import Player from './components/admin/Player';

export default function App(){
  const [picks, setPicks] = useState<{userId: string, week: number, pick: string, id: string}[]>([]);
  const [users, setUsers] = useState<{id: string, username: string,  email: string, isactive: boolean, admin: boolean, pastchamp: boolean, diff: number, createdAt: string, updatedAt: string}[]>(usersData);

  useEffect(() => {
    setPicks(picksData);
    setUsers(usersData);
  }, [])
  
  return (
  <>
    <NavBar />
    <AppContainer>
      
      <Router>
        <Routes>
          
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='gamepage' element={<GamePage />} />
          
          <Route path='admin' element={<Admin />}>
            <Route index element={<PickList picks={picks} users={users}/>} />
            <Route path='picks' element={<PickList picks={picks} users={users}/>} />
            <Route path='players' element={<PlayerList users={users}/>} />
            <Route path='player/:userId' element={<Player />} />
            <Route path='eliminate' element={<Eliminate />} />            
          </Route>
        
        </Routes>
      </Router>
    
    </AppContainer>
  </>

  )
}



const AppContainer = styled.div`
  margin-top: 50px;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;