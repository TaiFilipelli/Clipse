import React, { useState } from 'react'
import './login-form.css';
import { Link } from 'wouter';
import { useSpring, animated } from '@react-spring/web';

const LoginForm = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [showButton, setShowButton] = useState(true);

    const [springs,api] = useSpring(()=>({
      from:{y:500},
    }));

    const handleClickShowForm=()=>{
      api.start({
        from:{y:500},
        to:{y:0},
      })
      setShowButton(false);
    }

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
      {showButton &&(<button type='submit' className='links' onClick={handleClickShowForm}>Ingresar</button>)}
      <animated.section className="login" style={{...springs,}}>
        <label htmlFor="user">Nombre de usuario</label>
        <br />
        <input type="text" placeholder='Usuario' value={user} onChange={handleUserChange}/>
        <br />
        <label htmlFor="pass">Contraseña</label>
        <br />
        <input type="password" placeholder='Contraseña' value={password} onChange={handlePasswordChange}/><br />
        <button type='submit' className='links'>Iniciar sesión</button><br />
        <Link to='/registro' className='links'>Quiero crear mi usuario</Link>
      </animated.section>
    </div>
  )
}

export default LoginForm;
