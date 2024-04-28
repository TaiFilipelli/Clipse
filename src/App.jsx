import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Login from './components/login';
import { Route } from 'wouter';
import RegistroUsuario from './components/registroUsuario';

export default function App() {
  return (
    <div>
    <Login>
      <Route path='/registro' component={RegistroUsuario}></Route>
    </Login>
    </div>
  );
}


