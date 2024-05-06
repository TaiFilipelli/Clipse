import React, { useState, useEffect } from 'react';
import './login.css';
import LoginForm from './login-form';
import { useSpring, animated } from '@react-spring/web';
import SubtitleType from './SubtitleType';

const Login = () => {
  const [showLogo, setShowLogo] = useState(false);

  const spring = useSpring({
    opacity: showLogo ? 1 : 0,
  });

  useEffect(()=>{
    const timeout= setTimeout(()=>{
      setShowLogo(true);
    },1000)

    return () => clearTimeout(timeout);
  },[]);

  return (
    <animated.div style={spring}>
      <img className='logo' src='/white-logo-eclipse.png' alt='logo Clipse'/>
      <h1>Bienvenido a Clipse</h1>
      <SubtitleType/>
      <LoginForm/>
    </animated.div>
  )
}

export default Login
