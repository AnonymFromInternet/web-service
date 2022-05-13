import { Link, Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import useFetch from "../../shared/hooks/useFetch";
import useLocalStorage from "../../shared/hooks/useLocalStorage";
import { CurrentUserContext } from "../../shared/contexts/currentUserContext";
import BackendErrorMessagesComponent from "./BackendErrorMessages.component";

const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
  let { pathname } = useLocation();

  const isLoginPage = pathname === "/login";
  const pageTitle = isLoginPage ? "Sign In" : "Sign Up";
  const descriptionLink = isLoginPage ? "/register" : "login";
  const descriptionLinkText = isLoginPage
    ? "Need an Account?"
    : "Have an Account?";

  const apiUrl = isLoginPage ? "/users/login" : "/users";
  const user = isLoginPage
    ? { email, password }
    : { userName, email, password };

  const [{ isLoading, response, errors }, fetchData] = useFetch(apiUrl);
  const [, setToken] = useLocalStorage("accessToken");

  const [currentUserState, setCurrentUserState] =
    useContext(CurrentUserContext);
  console.log(currentUserState);

  const login = (e) => {
    e.preventDefault();
    fetchData({
      method: "post",
      user,
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(response.data.user.token);
    setIsSuccessfulSubmit(true);
    setCurrentUserState((prevState) => {
      console.log("current user was set");
      return {
        ...prevState,
        isLoading: false,
        isLoggedIn: true,
        currentUser: response.data.user,
      };
    });
  }, [response, setToken, setCurrentUserState]);

  if (isSuccessfulSubmit) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-xs-center">{pageTitle}</h1>
            <p className={"text-xs-center"}>
              <Link to={descriptionLink}>{descriptionLinkText}</Link>
            </p>
            <form onSubmit={login}>
              {errors && (
                <BackendErrorMessagesComponent backendErrors={errors} />
              )}
              <fieldset>
                {!isLoginPage && (
                  <fieldset className={"form-group"}>
                    <input
                      type="text"
                      className={"form-control form-control-lg"}
                      placeholder={"Username"}
                      value={userName}
                      onChange={(input) => setUserName(input.target.value)}
                    />
                  </fieldset>
                )}

                <fieldset className={"form-group"}>
                  <input
                    type="email"
                    className={"form-control form-control-lg"}
                    placeholder={"Email"}
                    value={email}
                    onChange={(input) => setEmail(input.target.value)}
                  />
                </fieldset>

                <fieldset className={"form-group"}>
                  <input
                    type="password"
                    className={"form-control form-control-lg"}
                    placeholder={"Password"}
                    value={password}
                    onChange={(input) => setPassword(input.target.value)}
                  />
                </fieldset>
              </fieldset>

              <button
                className={"btn btn-lg btn-success pull-xs-right"}
                type={"submit"}
                disabled={isLoading}
              >
                {pageTitle}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthenticationPage;
