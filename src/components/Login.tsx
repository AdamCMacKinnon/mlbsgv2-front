import LoginForm from './forms/loginForm'
import {Link } from 'react-router-dom'

import styled from 'styled-components';

const LoginFormContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  padding: 20px;
  background-color: lightcyan;
  color:rgb(6, 128, 55);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BottomLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px;
`
const LoginFormLink = styled(Link)`
  text-decoration: none;
`

function Login() {
  return (
    <LoginFormContainer>
      <h2>LOGIN PAGE</h2>
      <LoginForm />
      <BottomLinks>
        <LoginFormLink to="/">Back to Home</LoginFormLink>
        <LoginFormLink to="/register">Register Here!</LoginFormLink>
      </BottomLinks>

    </LoginFormContainer>
  )
}

export default Login