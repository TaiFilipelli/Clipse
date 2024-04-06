import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function Section({ title, desc, button }) {
  const sectionRef = useRef(null);
  const [isRetirarse, setIsRetirarse] = useState(false);

  const handleScroll = () => {
    const section = sectionRef.current;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Cambia isRetirarse a true cuando el usuario hace scroll hacia abajo
    setIsRetirarse(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={`info ${isRetirarse ? 'retirarse' : ''}`}>
      <h2 className='title'>{title}</h2>
      <h3 className='desc'>{desc}</h3>
      <button className='button'>{button}</button>
    </section>
  );
}
export default function App() {
  return (
    <div className='inicio'>
      <img className='logo' src='/src/assets/white-logo-eclipse.png' />
      <h1>Bienvenido a Clipse</h1>
      <Section
        title={'Óptimo, eficiente, limpio.'}
        desc={'En Clipse, nos enfocamos en una única cosa: la experiencia de usuario.'}
        button={'Ver más'}
      />
    </div>
  );
}
