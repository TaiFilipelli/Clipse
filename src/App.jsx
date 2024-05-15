import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Login from './components/login';
import { Switch, Route } from 'wouter';
import RegistroUsuario from './components/pages/registroUsuario';

export default function App() {
  return (
    <div>
    <Switch>
      <Route path='/' component={Login}/>
      <Route path='/registro' component={RegistroUsuario}></Route>

    </Switch>
    
    
    </div>
  );
}


