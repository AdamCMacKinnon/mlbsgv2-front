import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';

import Admin from './components/Admin'
import GamePage from './components/GamePage';
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import NavBar from './components/NavBar';
import PlayerList from './components/admin/PlayerList';
import Protected from './components/Protected';
import Register from './components/Register'
import Player from './components/admin/Player';

import { checkToken } from './functions';



export default function App(){
  const [token, setToken] = useState('');
  const [user, setUser] = useState<{id: string, username: string,  email: string, isactive: boolean, admin: boolean, pastchamp: boolean, diff: number, createdAt: string, updatedAt: string}>();
  const [users, setUsers] = useState<{id: string, username: string,  email: string, isactive: boolean, admin: boolean, pastchamp: boolean, diff: number, createdAt: string, updatedAt: string}[]>([]);

  const validToken = checkToken(token);
  
  return (
  <>
    <NavBar user={user} setToken={setToken}/>
    <AppContainer>
      
      <Router>
        <Routes>
          
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<Login setToken={setToken} setUsers={setUsers} setUser={setUser}/>} />
          <Route path='register' element={<Register setToken={setToken} setUsers={setUsers} setUser={setUser}/>} />

          <Route 
            path='gamePage' 
            element={
              <Protected isAllowed={validToken}>
                <GamePage user={user} token={token} setUsers={setUsers} users={users}/>
              </Protected>
            } />
          
          <Route 
            path='admin' 
            element={
              <Protected isAllowed={validToken && user?.admin} redirectPath={'/gamePage'}>
                <Admin />
              </Protected>
          }>
            <Route index element={<PlayerList users={users} token={token} setUsers={setUsers}/>} />
            <Route path='players' element={<PlayerList users={users} token={token} setUsers={setUsers}/>} />
            <Route path='player/:userId' element={<Player />} />         
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