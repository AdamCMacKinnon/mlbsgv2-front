import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';

import Admin from './components/Admin'
import PickList from './components/admin/PickList';
import GamePage from './components/GamePage';
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import NavBar from './components/NavBar';
import PlayerList from './components/admin/PlayerList';
import Protected from './components/Protected';
import Register from './components/Register'
import Eliminate from './components/admin/Eliminate';
import Player from './components/admin/Player';

import { checkToken, getLoggedInUser } from './functions';



export default function App(){
  const [token, setToken] = useState('');
  const [users, setUsers] = useState<{id: string, username: string,  email: string, isactive: boolean, admin: boolean, pastchamp: boolean, diff: number, createdAt: string, updatedAt: string}[]>([]);

  const loggedInUser = getLoggedInUser(users, token);
  const validToken = checkToken(token);
  
  return (
  <>
    <NavBar user={loggedInUser} setToken={setToken}/>
    <AppContainer>
      
      <Router>
        <Routes>
          
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<Login setToken={setToken} setUsers={setUsers}/>} />
          <Route path='register' element={<Register />} />

          <Route 
            path='gamePage' 
            element={
              <Protected isAllowed={validToken}>
                <GamePage />
              </Protected>
            } />
          
          <Route 
            path='admin' 
            element={
              <Protected isAllowed={validToken && loggedInUser?.admin} redirectPath={'/gamePage'}>
                <Admin />
              </Protected>
          }>
            <Route index element={<PickList users={users}/>} />
            <Route path='picks' element={<PickList users={users}/>} />
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