import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/routes";
import TopBar from "./shared/components/topBar/topBar";

import "./globalCss/global.css";

const App = () => {
  return (
    <>
      <Router>
        <TopBar />
        <Routes></Routes>
      </Router>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
