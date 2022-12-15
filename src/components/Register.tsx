import { Link } from 'react-router-dom';
import RegForm from './forms/regForm'

import styled from 'styled-components';



export default function Register() {
  return (
    <RegistrationContainer>
      <RegistrationForm>
        <h1>REGISTER</h1>
        <RegForm />
        <Link to="/">Back to Home</Link>
      </RegistrationForm>
    </RegistrationContainer>

  )
}



const RegistrationContainer = styled.div`
  height: 97vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const RegistrationForm = styled.div`
  margin: 200px auto;
  width: 80%;
  max-width: 500px;
  padding: 20px;
  background-color: lightcyan;
  color:rgb(6, 128, 55);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  a{
    margin: 20px;
  }
`