import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import PageNotFound from "./components/PageNotFound";

 export const ReactRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/projects" exact element={<Projects />}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
 };
