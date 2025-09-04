import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// style
import "./style/global/global.css";
import "./style/global/root.css";
import "./style/global/fonts.css";

// components
import Navigation from "./components/nav";
import Header from "./components/header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation />
    <Header />
  </StrictMode>
);
