import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GoogleAuthProvider } from "./context/auth/index.tsx";
import { router } from "./router/index.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleAuthProvider>
      <RouterProvider router={router} />
    </GoogleAuthProvider>
  </StrictMode>
);
