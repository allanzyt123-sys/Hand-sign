import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import TranslatorPage from "./pages/TranslatorPage";
import TeamPage from "./pages/TeamPage";
import VisionPage from "./pages/VisionPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="translator" element={<TranslatorPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="vision" element={<VisionPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
