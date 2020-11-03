// custom hook
import { useEffect, useState, useDebugValue } from 'react';

const useTitleInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      document.title = value;
    });
  
    useDebugValue(value ? "Full" : "Empty");

    return  [value, setValue];
  };

  export default useTitleInput;