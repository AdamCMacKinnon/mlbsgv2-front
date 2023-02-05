import { useState } from 'react';

//Components
import LoginForm from '../components/login/LoginForm'
import StayLoggedIn from '../components/StayLoggedIn';

//Styles
import { LoginFormContainer, LoginFormSection, BottomLinks, LoginFormLink } from './Login.styles';



const Login = (props: any) => {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const { setToken, setUsers, setUser } = props;

  return (
    <LoginFormContainer>
      <LoginFormSection>
        <h2>LOGIN PAGE</h2>
        <LoginForm setToken={setToken} setUsers={setUsers} setUser={setUser} stayLoggedIn={stayLoggedIn}/>
        <StayLoggedIn stayLoggedIn={stayLoggedIn} setStayLoggedIn={setStayLoggedIn}/>
        <BottomLinks>
          <LoginFormLink to="/">Back to Home</LoginFormLink>
          <LoginFormLink to="/register">Register Here!</LoginFormLink>
        </BottomLinks>
      </LoginFormSection>
    </LoginFormContainer>
  )
}

export default Login;