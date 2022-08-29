import React from 'react'
import "../styles/forms.css"
import LoginForm from './forms/loginForm'


function Login() {
  return (
    <div className="loginForm"><h2>LOGIN PAGE</h2>
    <LoginForm /><br></br>
    <span><a href="/">Back to Home</a></span><br></br>
    <span><a href="/register">Register Here!</a></span>
    </div>
  )
}

export default Login