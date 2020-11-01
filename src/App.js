import React from 'react';
import Toggle from './Toggle';
import useTitleInput from './hooks/useTitleInput';

const App = () => {

  // template: how to use useState
  // const [value, setValue] = useState(initialState);
  const [title, setTitle] = useTitleInput('React Hooks (custom title)');   


  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
