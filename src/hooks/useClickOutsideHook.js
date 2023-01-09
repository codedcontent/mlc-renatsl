import { useEffect } from "react";

const useClickOutsideHook = (domNodeRef, callback) => {
  useEffect(() => {
    const handleMouseDown = (event) => {
      if (domNodeRef.current && !domNodeRef.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [domNodeRef]);
};

export default useClickOutsideHook;
