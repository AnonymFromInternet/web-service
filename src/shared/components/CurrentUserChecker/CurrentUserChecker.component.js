import useFetch from "../../hooks/useFetch";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { useLocation } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const CurrentUserCheckerComponent = ({ children }) => {
  const [{ response }, fetchData] = useFetch("/user");
  const [, setCurrentUserState] = useContext(CurrentUserContext);
  const [token] = useLocalStorage("accessToken");

  useEffect(() => {
    if (!token) {
      setCurrentUserState((prevState) => {
        return { ...prevState, isLoggedIn: false };
      });
      return;
    }
    fetchData();
    setCurrentUserState((prevState) => {
      return { ...prevState, isLoading: true };
    });
  }, []);

  useEffect(() => {
    if (!response) {
      return;
    }
    setCurrentUserState((prevState) => ({
      ...prevState,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user,
    }));
  }, [response]);
  return children;
};
export default CurrentUserCheckerComponent;
