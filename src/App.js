import Header from './components/Header.js';
import Main from "./components/Main.js";
import './App.css';

// import { useState, useEffect } from 'react'
// import { auth } from './services/firebase';


function App() {
  // const [ user, setUser ] = useState(null);
  // useEffect(() => {
  //  const unsubscribe =  auth.onAuthStateChanged(user => setUser(user));
  //  return () => unsubscribe();
  // }, [])


      return (
     <>
      <Header
      //  user={user}
 />
      <Main />

     </>
  )
}

export default App;
