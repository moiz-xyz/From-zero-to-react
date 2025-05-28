import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter_Add = () => {
    setCounter(counter + 1);
  };

  const handleCounter_sub = () => {
    setCounter(counter - 1);
  };

  const handleCounter_reset = () => {
    setCounter(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Counter App</h2>
      <p>Counter : {counter}</p>
      <button onClick={handleCounter_Add}>Increment</button>
      <button onClick={handleCounter_sub}>Decrement</button>
      <button onClick={handleCounter_reset}>Reset</button>
    </div>
  );
};

export default App;
