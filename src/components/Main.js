import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import { auth } from '../services/firebase';


function Main() {
const [ user, setUser ] = useState(null);

useEffect(() => {
 const unsubscribe =  auth.onAuthStateChanged(user => setUser(user));
 return () => unsubscribe();
}, []);


  return (
     <>
    
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/login" render={() => (
        user ? <Redirect to="/dashboard"/> : <Login />
       )}/>
       <Route path="/dashboard" render={() => (
        user ? <Dashboard /> : <Redirect to="/login" />
       )}/>
     </Switch>

     </>
  );
}

export default Main;
