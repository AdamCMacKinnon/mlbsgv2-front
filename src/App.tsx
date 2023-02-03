import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';

import Admin from './components/Admin'
import GamePage from './components/GamePage';
import LandingPage from './components/LandingPage'
import Login from './pages/Login'
import NavBar from './components/NavBar';
import Players from './components/admin/Players';
import Protected from './components/Protected';
import Register from './pages/Register';
import RunDifferential from './components/admin/RunDifferential';
import Player from './components/admin/Player';

import { checkToken } from './functions';



export default function App(){
  const [token, setToken] = useState('');
  const [user, setUser] = useState<{id: string, username: string,  email: string, isactive: boolean, role: string, pastchamp: boolean, diff: number, createdAt: string, updatedAt: string}>();
  const [users, setUsers] = useState<{id: string, username: string,  email: string, isactive: boolean, role: string, pastchamp: boolean, diff: number, createdAt: string, updatedAt: string}[]>([]);

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
                <GamePage user={user} setUser={setUser} token={token} setUsers={setUsers} users={users}/>
              </Protected>
            } />
          
          <Route 
            path='admin' 
            element={
              <Protected isAllowed={validToken && user?.role === 'admin'} redirectPath={'/gamePage'}>
                <Admin />
              </Protected>
          }>
            <Route index element={<Players users={users} token={token} setUsers={setUsers}/>} />
            <Route path='players' element={<Players users={users} token={token} setUsers={setUsers}/>} />
            <Route path='player/:username' element={<Player users={users} token={token} setUsers={setUsers}/>} />
            <Route path='runDifferential' element={<RunDifferential token={token} setUsers={setUsers}/>} />      
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