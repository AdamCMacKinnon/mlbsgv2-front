import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import GamePage from './pages/GamePage';
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import NavBar from './components/navbar/NavBar';
import Protected from './components/Protected';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import ProfilePage from './pages/ProfilePage';
import { format } from 'date-fns';
import { checkToken, getLocalStorageToken, getLoggedInUser, fetchAdminUsers, getCurrentWeek } from './functions';
import UserAccount from './components/gamepage/UserAccount';




export default function App(){
  const [token, setToken] = useState('');
  const [loadTokenSw, setLoadTokenSw] = useState(false);
  const [week, setWeek] = useState(0);
  const [user, setUser] = useState<{id: string, username: string,  email: string, isactive: boolean, role: string, career_diff: number, createdAt: string, updatedAt: string}>();
  const [users, setUsers] = useState<{id: string, username: string,  email: string, isactive: boolean, role: string, career_diff: number, createdAt: string, updatedAt: string}[]>([]);

  const navigate = useNavigate();
  const localStorageToken: any = getLocalStorageToken();
  const date = format(new Date(), 'yyyy-LL-dd');
  useEffect(() => {   
    const handleToken = (localStorageToken: any) => {
      if (!token){
        const validToken = checkToken(localStorageToken);
        if (validToken) {
          setToken(localStorageToken)
          setLoadTokenSw(true);
        } else {
          localStorage.removeItem('token');
        }
      }
    }

    if (localStorageToken) {
      const validToken = checkToken(localStorageToken);
        if (validToken) {
          handleToken(localStorageToken);   
        }
      handleToken(localStorageToken);      
    }
  }, [setToken, navigate, localStorageToken, token])

  useEffect(() => {
    const handleUser = async (token: any) => {
      let user = await getLoggedInUser(token)
        setUser(user);
        let users
        if (user.role === 'admin') {
          users = await fetchAdminUsers(token);
          navigate('/admin');
        } else {
          navigate('/profile');
        }
        setUsers(users);
    }
    if (loadTokenSw) {
      handleUser(token);
      setLoadTokenSw(false);
    } 
  },[navigate, token, loadTokenSw, user]) 

  const validToken = checkToken(token);

  useEffect(() => {
    const handleWeek = async (date: string) => {
      const dateToWeek = await getCurrentWeek(date);
      const thisWeek: any = dateToWeek?.data;
      setWeek(thisWeek);
    }
    handleWeek(date);
  }, [date])
  
  return (
  <>
    
    <AppContainer>
    <NavBar user={user} setUser={setUser} setToken={setToken}/>
        <Routes>
          
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<Login setToken={setToken} setUsers={setUsers} setUser={setUser}/>} />
          <Route path='register' element={<Register setToken={setToken} setUsers={setUsers} setUser={setUser}/>} />

          <Route 
            path='profile' 
            element={
              <Protected isAllowed={validToken}>
                <ProfilePage user={user} setUser={setUser} token={token} setUsers={setUsers} users={users} currentWeek={week} />
              </Protected>
            } />

          <Route 
            path='profile/gamePage/:leagueid' 
            element={
              <Protected isAllowed={validToken}>
                <GamePage user={user} setUser={setUser} token={token} setUsers={setUsers} users={users} currentWeek={week}/>
              </Protected>
            } />

           <Route path='account' element={
            <Protected isAllowed={validToken}>
              <UserAccount user={user} token={token} setUser={setUser}/>
            </Protected>
           }/>    
          
          {/* <Route 
            path='profile/gamepage/:id/admin' 
            element={
              <Protected isAllowed={validToken}>
                <Admin />
              </Protected>
          }> */}
            {/* <Route index element={<Players users={users} token={token} setUsers={setUsers}/>} />
            <Route path='players' element={<Players users={users} token={token} setUsers={setUsers}/>} />
            <Route path='player/:username' element={<Player users={users} token={token} setUsers={setUsers}/>} />
            <Route path='runDifferential' element={<RunDifferential token={token} setUsers={setUsers}/>} />       */}
          {/* </Route> */}

          <Route path='schedule' element={<Schedule />} />
        
        </Routes>

    </AppContainer>
  </>

  )
}



const AppContainer = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;