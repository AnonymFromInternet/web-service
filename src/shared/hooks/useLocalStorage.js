import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue = "") => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });
  useEffect(() => {
    if (!value && value === "") {
      return;
    }
    localStorage.setItem(key, value);
  }, [value, key]);
  return [value, setValue];
};
export default useLocalStorage;
