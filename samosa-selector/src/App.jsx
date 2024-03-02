import './App.css';
import { useState } from 'react';



const App = () => {
const [count, setCount] = useState(0);
const[multiplier, setMultiplier] = useState(1);

const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <img className = "samosa" src = "/public/samosa.png" alt = "samosa" onClick = {updateCount} 
/>

    </div>
  );
}

export default App