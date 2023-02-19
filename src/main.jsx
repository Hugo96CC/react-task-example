import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> {/* Verifica si estamos escribiendo un buen codigo de React*/} 
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
