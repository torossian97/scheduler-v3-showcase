import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const { worker } = await import("./mocks/browser");
worker.start({
  onUnhandledRequest: "bypass",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
