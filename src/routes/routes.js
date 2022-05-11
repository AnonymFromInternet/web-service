import { Route, Routes } from "react-router-dom";

import GlobalFeed from "../pages/globalFeed/globalFeed";
import Article from "../pages/article/article";

export default () => {
  return (
    <Routes>
      <Route path={"/"} element={<GlobalFeed />} />
      <Route path={"/articles/:slug"} element={<Article />} />
    </Routes>
  );
};
