import React from 'react';
import './App.css';

function Section({title, desc, button}){
  return(
    <section className='info'>
      <h2 className='title'>{title}</h2>
      <h3 className='desc'>{desc}</h3>
      <button className='button'>{button}</button>
    </section>
  );
}

export default function App() {
  return(
    <div className='inicio'>
      <img className='logo' src='/src/assets/white-logo-eclipse.png'/>
      <h1>Bienvenido a Clipse</h1>
    <Section title={'Óptimo, eficiente, limpio.'} desc={'En Clipse, nos enfocamos en una única cosa: la experiencia de usuario.'} button={'Ver más'} />
    </div>
  );
}