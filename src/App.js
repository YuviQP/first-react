import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  return (
    <div>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>Incrementar</button>
    </div>
  );
}

export default App;
