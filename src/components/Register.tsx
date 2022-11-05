import React from 'react'
import RegForm from './forms/regForm'

import styled from 'styled-components';

const RegistrationForm = styled.div`
  margin: 200px auto;
  width: 80%;
  max-width: 500px;
  padding: 20px;
  background-color: lightcyan;
  color:rgb(6, 128, 55);
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Register() {
  return (
    <RegistrationForm><h1>REGISTER</h1>
        <RegForm /><br></br>
    <span><a href="/">Back to Home</a></span><br></br>
    </RegistrationForm>
  )
}

export default Register