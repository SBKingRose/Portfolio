import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import App from "./App.tsx";
import "./index.css";

// Disable GSAP trial warnings
gsap.config({ trialWarn: false });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
