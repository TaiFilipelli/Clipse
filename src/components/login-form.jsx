import React from 'react'
import './login-form.css';
import { Link } from 'wouter';

const LoginForm = () => {
  return (
    <div>
      <section className="login">
        <label htmlFor="user">Nombre de usuario</label>
        <br />
        <input type="text" placeholder='Usuario' />
        <br />
        <label htmlFor="pass">Contraseña</label>
        <br />
        <input type="password" placeholder='Contraseña' /><br />
        <Link to='/' className='links'>Iniciar sesión</Link><br />
        <Link to='/' className='links'>Quiero crear mi usuario</Link>
      </section>
    </div>
  )
}

export default LoginForm;
