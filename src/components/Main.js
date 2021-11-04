import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import { auth } from '../services/firebase';


function Main() {
// const [ user, setUser ] = useState(null);

// useEffect(() => {
//  const unsubscribe =  auth.onAuthStateChanged(user => setUser(user));
//  return () => unsubscribe();
// }, []);

const [ advice, setAdvice ] = useState([]);
const URL = "https://rule-of-thumb-ga.herokuapp.com/dashboard";

const getAdvice = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setAdvice(data);
};
const createAdvice = async (advice) => {
  console.log(advice)
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-type": "Application/json",
        },
        body: JSON.stringify(advice),
    });
    getAdvice();
}
useEffect(()=> getAdvice(), []);
  return (
     <>
    
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/login" render={() => (
        // user ?
         <Redirect to="/dashboard"/> 
        //  : <Login />
       )}/>
       <Route path="/dashboard" render={() => (
        // user ? 
        <Dashboard  advice={advice} createAdvice={createAdvice} /> 
        // : <Redirect to="/login" 
        // />
       )}/>
     </Switch>

     </>
  );
}

export default Main;
