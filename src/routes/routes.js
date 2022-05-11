import { Route, Routes } from "react-router-dom";

import GlobalFeed from "../pages/globalFeed/globalFeed";
import Article from "../pages/article/article";
import AuthenticationPage from "../pages/authentication/authentication";

export default () => {
  return (
    <Routes>
      <Route path={"/"} element={<GlobalFeed />} />
      <Route path={"/login"} element={<AuthenticationPage />} />
      <Route path={"/register"} element={<AuthenticationPage />} />
      <Route path={"/articles/:slug"} element={<Article />} />
    </Routes>
  );
};
