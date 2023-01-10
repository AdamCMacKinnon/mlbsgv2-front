import LoginForm from './forms/loginForm'
import {Link } from 'react-router-dom'

import styled from 'styled-components';



export default function Login(props: any) {
  const { setToken, setUsers, setUser } = props
  return (
    <LoginFormContainer>
          <LoginFormSection>
      <h2>LOGIN PAGE</h2>
      <LoginForm setToken={setToken} setUsers={setUsers} setUser={setUser}/>
      <BottomLinks>
        <LoginFormLink to="/">Back to Home</LoginFormLink>
        <LoginFormLink to="/register">Register Here!</LoginFormLink>
      </BottomLinks>
    </LoginFormSection>
    </LoginFormContainer>

  )
}



const LoginFormSection = styled.div`
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
  max-height: 300px;
  position: relative;
`

const LoginFormContainer = styled.div`
  height: 97vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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