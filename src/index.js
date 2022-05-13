import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/routes";
import TopBarComponent from "./shared/components/topBar/topBarComponent";
import { CurrentUserProvider } from "./shared/contexts/currentUserContext";

import "./globalCss/global.css";
import CurrentUserCheckerComponent from "./shared/components/CurrentUserChecker/CurrentUserChecker.component";

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserCheckerComponent>
        <Router>
          <TopBarComponent />
          <Routes></Routes>
        </Router>
      </CurrentUserCheckerComponent>
    </CurrentUserProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
