import "./styles/global.css";
import "./styles/components/Glass.css";
import "./styles/components/Navbar.css";
import "./styles/components/Footer.css";
import "./styles/pages/HomePage.css";
import "./styles/pages/TeamPage.css";
import "./styles/pages/TranslatorPage.css";
import "./styles/pages/EducationPage.css";
import "./styles/pages/VisionPage.css";
import "./styles/pages/ContactPage.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
