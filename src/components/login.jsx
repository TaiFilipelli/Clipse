import React from 'react';
import './login.css';
import LoginForm from './login-form';

const Login = () => {
  return (
    <div className='inicio'>
      <img className='logo' src='/white-logo-eclipse.png' />
      <h1>Bienvenido a Clipse</h1>
      <LoginForm/>
    </div>
  )
}

export default Login
