import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import { auth } from './services/firebase';
import './App.css';



function App() {
const [ user, setUser ] = useState(null);

useEffect(() => {
 const unsubscribe =  auth.onAuthStateChanged(user => setUser(user));
 return () => unsubscribe();
}, [])




  return (
     <>
     <Header />
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       <Route path="/dashboard">
         <Dashboard />
       </Route>
     </Switch>
     <Footer />
     </>
  );
}

export default App;
