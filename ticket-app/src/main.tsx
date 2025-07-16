import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TanStackProvider } from "./plugins/TanStackProvider.tsx";
import { ToastProvider } from "./plugins/ToastifyProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanStackProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </TanStackProvider>
  </StrictMode>
);
