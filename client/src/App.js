import {useEffect, useState} from 'react'
import './App.css';
import getUsers from './server';

const App = () => {

  const [err, setErr] = useState("ERR");

useEffect(() => {
  async function fetchData() {
    const response = getUsers();
    const json = await response;
    setErr(JSON.stringify(json))
  }
  fetchData();
}, [])

  return (
    <div className="App">
    
         {err}
       
    </div>
  );
}

export default App;
