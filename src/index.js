import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";

async function startWorker() {
  if (process.env.NODE_ENV === "development") {
    try {
      const { worker } = await import("./mocks/browser");
      await worker.start({
        onUnhandledRequest: "bypass",
      });
      console.log("Service worker started successfully.");
    } catch (error) {
      console.error("Failed to start service worker:", error);
    }
  }
}

async function init() {
  await startWorker();

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
      <Analytics />
    </React.StrictMode>
  );
}

init();
