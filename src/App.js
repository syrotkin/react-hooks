import React, { useRef, useMemo } from "react";
import Toggle from "./Toggle";
import useTitleInput from './hooks/useTitleInput';
import Counter from './Counter';

const App = () => {

  // template: how to use useState
  // const [value, setValue] = useState(initialState);
  const [title, setTitle] = useTitleInput('React Hooks (custom title)');   

  const ref = useRef();
  
  const reverseWord = (word) => {
    console.log("function called");
    return [...word].reverse().join(""); 
  };

  const header = 'Level Up Dishes';

  const HeaderReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <div className="main-wrapper" ref={ref}>
      <h1>{HeaderReversed}</h1>
      <Toggle />
      <Counter />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
