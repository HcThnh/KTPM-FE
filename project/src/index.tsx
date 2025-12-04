import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Interface } from "./screens/Interface";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Interface/>
  </StrictMode>,
);
