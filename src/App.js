import React, { useRef, createContext } from "react";
import Toggle from "./Toggle";
import useTitleInput from './hooks/useTitleInput';

export const UserContext = createContext();

const App = () => {

  // template: how to use useState
  // const [value, setValue] = useState(initialState);
  const [title, setTitle] = useTitleInput('React Hooks (custom title)');   

  const ref = useRef();
  console.log(ref.current);

  return (
    <UserContext.Provider value={{
      user: true
    }}>
      <div className="main-wrapper" ref={ref}>
        <h1>Level Up Dishes</h1>
        <Toggle />
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
    </UserContext.Provider>
  );
};

export default App;
