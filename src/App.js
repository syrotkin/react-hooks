import React, { useRef } from "react";
import Toggle from "./Toggle";
import useTitleInput from './hooks/useTitleInput';

const App = () => {

  // template: how to use useState
  // const [value, setValue] = useState(initialState);
  const [title, setTitle] = useTitleInput('React Hooks (custom title)');   

  const ref = useRef();
  console.log(ref.current.className);

  return (
    <div className="main-wrapper" ref={ref}>
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
