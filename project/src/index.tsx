import { createRoot } from "react-dom/client";
import { Interface } from "./screens/Interface";
import { LoginPage } from "./screens/Login";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById("app") as HTMLElement).render(
  <BrowserRouter>
    <Interface/>
  </BrowserRouter>,
);
