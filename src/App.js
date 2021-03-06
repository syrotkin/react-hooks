import React, { useRef } from "react";
import Toggle from "./Toggle";
import useTitleInput from './hooks/useTitleInput';
import Counter from './Counter';
import useAbortableFetch from "use-abortable-fetch";
import { useSpring, animated } from 'react-spring';

const App = () => {
  // template: how to use useState
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput("");

  const ref = useRef();

  const { data, loading } = useAbortableFetch(
    "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
  );

  // from react-spring
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  console.log(props);

  return (
    <div className="main-wrapper" ref={ref}>
      <animated.h1 style={props}>Level Up Dishes</animated.h1>
      <Toggle />
      <Counter />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Submit</button>
      </form>

      {data && data.map((dish) => (
        <article key={dish.name} className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map((ingredient) => (
              <span key={ingredient}>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default App;
