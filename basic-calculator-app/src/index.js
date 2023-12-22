// Import the necessary modules.
import React, { useState } from 'react';
import './App.css';

// Define the App component.
function App() {
  // Create state variables to store the current input and the result.
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle the button click event.
  const handleClick = (e) => {
    // Check if the button is the equals button.
    if (e.target.value === '=') {
      // Evaluate the input expression and store the result.
      const result = eval(input);
      setResult(result);
    } else {
      // Append the button value to the input.
      setInput(input + e.target.value);
    }
  };

  // Render the App component.
  return (
    <div className="App">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick} value="=">=</button>
      <button onClick={handleClick} value="1">1</button>
      <button onClick={handleClick} value="2">2</button>
      <button onClick={handleClick} value="3">3</button>
      <button onClick={handleClick} value="+">+</button>
      <button onClick={handleClick} value="-">-</button>
      <button onClick={handleClick} value="*">*</button>
      <button onClick={handleClick} value="/">/</button>
      <button onClick={handleClick} value="C">C</button>
      <div>{result}</div>
    </div>
  );
}

export default App;