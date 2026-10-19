import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthProvider from "./LAB1-2-3/AuthProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
