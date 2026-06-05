import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectArticle from "./pages/ProjectArticle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects/:slug" element={<ProjectArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
