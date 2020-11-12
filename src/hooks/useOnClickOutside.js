import { useEffect } from "react";

// from usehooks.com
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        // the click is inside the div - do nothing
        return;
      }

      // the click is outside the div, call the function that was passed in.
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // cleanup
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);
};

export default useOnClickOutside;
