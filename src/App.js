import { Swtich, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import { auth } from './services/firebase';
import './App.css';



function App() {
  return (
    <div className="App">
<h1>App</h1>
    </div>
  );
}

export default App;
