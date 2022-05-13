import { useContext, useEffect } from "react";

import { CurrentUserContext } from "../../contexts/currentUserContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import useFetch from "../../hooks/useFetch";

const CurrentUserCheckerComponent = ({ children }) => {
  const [{ response }, fetchData] = useFetch("/user");
  const [currentUser, setCurrentUserState] = useContext(CurrentUserContext);
  const [token] = useLocalStorage("accessToken");
  console.log("current user is:", currentUser);

  useEffect(() => {
    if (!token) {
      setCurrentUserState((prevState) => {
        return { ...prevState, isLoggedIn: false };
      });
      return;
    }
    // ?
    console.log("fetch data calling");
    // ?
    fetchData();
    setCurrentUserState((prevState) => {
      // already null
      console.log("current user from hook", currentUser);
      return { ...prevState, isLoading: true };
    });
    // ?
  }, [fetchData, token, setCurrentUserState]);

  useEffect(() => {
    if (!response) {
      return;
    }
    console.log("Reloading");
    setCurrentUserState((prevState) => ({
      ...prevState,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response,
    }));
  }, []);
  return children;
};
export default CurrentUserCheckerComponent;
