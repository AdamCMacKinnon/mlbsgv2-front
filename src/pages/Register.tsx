import { useState } from 'react';
import { Link } from 'react-router-dom';
import RegForm from '../components/register/RegisterForm'


import { RegistrationContainer, RegistrationForm } from './Register.styles';



const Register = (props: any) => {
  const [closeRegistration] = useState(false);
  const { setToken, setUsers, setUser } = props
  return (
    <RegistrationContainer>
      <RegistrationForm>
        <h1>REGISTER</h1>
        {
          closeRegistration ?
          
          <h3>We are not accepting new registrations since the season has started</h3>
          :
          <RegForm setToken={setToken} setUsers={setUsers} setUser={setUser}/>
          
        }
        
        <Link to="/">Back to Home</Link>
      </RegistrationForm>
    </RegistrationContainer>

  )
}

export default Register;