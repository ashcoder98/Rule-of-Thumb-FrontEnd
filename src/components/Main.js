import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Dashboard from '../pages/Dashboard';

function Main() {

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
       <Route path="/" render={() => (      
        <Dashboard  advice={advice} createAdvice={createAdvice} /> 
       )}/>
     </Switch>
     </>
  );
}

export default Main;
