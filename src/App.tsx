import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';

import GamePage from './components/GamePage';
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import NavBar from './components/NavBar';
import Register from './components/Register'



export default function App(){
  return (<>
  <NavBar />
      <AppContainer>
      
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/gamepage' element={<GamePage />} />
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