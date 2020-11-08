import { useLayoutEffect } from "react";

const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
  });
};

export default useBodyScrollLock;
