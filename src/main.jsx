import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ModalContextProvider from "./context/ModalContext.jsx";
import TaskContextProvider from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </ModalContextProvider>
  </StrictMode>,
);
