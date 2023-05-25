import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Connexion from "../pages/Connexion";
import ArticleDashboard from "@pages/ArticleDashboard";
import ArticleCreation from "../pages/ArticleCreation";
import Dashboard from "@pages/Dashboard";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/articlecreation" element={<ArticleCreation />} />
      <Route path="/articledashboard" element={<ArticleDashboard />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AllRoutes;
