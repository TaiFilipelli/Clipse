import React, { useState } from 'react'
import './login-form.css';
import { Link } from 'wouter';

const LoginForm = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleUserChange= (e) =>{
        setUser(e.target.value);
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem('username',user);
        localStorage.setItem('password',password);
        setUser('');
        setPassword('');
        console.log('Datos de inicio de sesión guardados');
    }
  return (
    <div>
      <section className="login">
        <label htmlFor="user">Nombre de usuario</label>
        <br />
        <input type="text" placeholder='Usuario' value={user} onChange={handleUserChange}/>
        <br />
        <label htmlFor="pass">Contraseña</label>
        <br />
        <input type="password" placeholder='Contraseña' value={password} onChange={handlePasswordChange}/><br />
        <button type='submit'>Iniciar sesión</button><br />
        <Link to='/registro' className='links'>Quiero crear mi usuario</Link>
      </section>
    </div>
  )
}

export default LoginForm;
