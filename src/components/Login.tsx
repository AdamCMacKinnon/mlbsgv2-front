
import LoginForm from './forms/loginForm'
import {Link } from 'react-router-dom'

import styled from 'styled-components';



export default function Login() {
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

const LoginFormContainer = styled.div`
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
  justify-self: center;
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