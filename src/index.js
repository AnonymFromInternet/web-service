import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/routes";
import TopBarComponent from "./shared/components/topBar/topBarComponent";

import "./globalCss/global.css";

const App = () => {
  return (
    <>
      <Router>
        <TopBarComponent />
        <Routes></Routes>
      </Router>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
