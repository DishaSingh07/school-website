import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CardProvider } from "./context/CardContext";
import "./index.css";

// Find the root element
const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

// Render the app
root.render(
  <CardProvider>
    <App />
  </CardProvider>
);
