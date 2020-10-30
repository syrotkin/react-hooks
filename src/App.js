import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

const App = () => {

  // template: how to use useState
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name;
  });

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      {/* coming up with a controlled input */}
      <Toggle />
      <form onSubmit={(e) => {
        e.preventDefault();
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

export default App;
