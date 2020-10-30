import React, { useState } from 'react';
import Toggle from './Toggle';

const App = () => {

  // template: how to use useState
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      {/* coming up with a controlled input */}
      <Toggle />
      <form onSubmit={(e) => {
        e.preventDefault();
        formSubmit(name, setName);
      }}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log(`email sent to ${value}!`);
  // Call to setValue clears the input 
  // although called from a different function!
  setValue('');
};

export default App;
