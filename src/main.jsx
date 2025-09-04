import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// style
import "./style/global/global.css";
import "./style/global/root.css";

// components
import Navigation from "./components/nav";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation />
  </StrictMode>
);
