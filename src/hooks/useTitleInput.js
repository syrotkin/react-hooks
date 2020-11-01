// custom hook
import { useEffect, useState } from 'react';

const useTitleInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      document.title = value;
    });
  
    return  [value, setValue];
  };

  export default useTitleInput;