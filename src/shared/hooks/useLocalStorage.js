import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue = "") => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });
  useEffect(() => {
    if (!value && value === initialValue) {
      return;
    }
    console.log("from useLocalStorage");
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setValue];
};
export default useLocalStorage;
