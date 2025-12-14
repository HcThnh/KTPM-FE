import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Interface } from "./screens/Interface";

createRoot(document.getElementById("app") as HTMLElement).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
);
