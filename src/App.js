import React, { useRef, useState, useEffect, useMemo } from "react";
import Toggle from "./Toggle";
import useTitleInput from './hooks/useTitleInput';
import Counter from './Counter';

const App = () => {

  // template: how to use useState
  // const [value, setValue] = useState(initialState);
  const [title, setTitle] = useTitleInput('');   

  const ref = useRef();
  
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    const response = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
    const data = await response.json();
    console.log('fetched: ', data);
    setDishes(data);
  };

  // this works:
  // useMemo(() => fetchDishes(), [dishes.length]);

  useEffect(() => {
    // don't need?
  });

  return (
    <div className="main-wrapper" ref={ref}>
      <h1>Level Up Dishes</h1>
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

      {dishes.map((dish) => (
        <article className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map((ingredient) => (
              <span>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default App;
