import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import {
  NylasSchedulerEditor,
  NylasScheduling,
  NylasAvailabilityPicker,
  NylasBookingCalendarPicker,
  NylasEventInfo,
  NylasEventTitle,
  NylasFormCard,
} from "@nylas/react";
import "./App.css";

function App() {
  // Get the configuration ID from the URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const Id = urlParams.get("config_id") || urlParams.get("booking_ref") || "";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <a href="/scheduler-editor" className="button">
                View Scheduler Editor
              </a>
              <NylasScheduling
                configurationId={Id}
                themeConfig={{
                  "--nylas-primary": "#d4af37", // Metallic Gold
                  "--nylas-info": "#b08d57", // Light Taupe
                  "--nylas-success": "#c2b280", // Sand
                  "--nylas-warning": "#ccb400", // Lemon Curry
                  "--nylas-error": "#c85a54", // Terra Cotta
                  "--nylas-error-pressed": "#ab4e52", // Persian Red
                  "--nylas-base-0": "#fffaf0", // Floral White
                  "--nylas-base-25": "#fff5e1", // Blanched Almond
                  "--nylas-base-50": "#fef3c7", // Moccasin
                  "--nylas-base-100": "#f5deb3", // Wheat
                  "--nylas-base-200": "#eed9b6", // Almond
                  "--nylas-base-300": "#e6cfa3", // Champagne
                  "--nylas-base-400": "#d2baa0", // Pale Silver
                  "--nylas-base-500": "#c7a77b", // Khaki (Web)
                  "--nylas-base-600": "#b39067", // Light French Beige
                  "--nylas-base-700": "#9e7e53", // Camel
                  "--nylas-base-800": "#8a6e45", // Antique Brass
                  "--nylas-base-900": "#735c37", // Dark Gold
                  "--nylas-base-950": "#5c482b", // Dark Lava
                  "--nylas-font-family": "'Inter', sans-serif",
                  "--nylas-border-radius": "0.25rem",
                }}
              />
            </div>
          }
        />
        <Route
          path="/reschedule"
          element={
            <div>
              <NylasScheduling
                rescheduleBookingId={"f8e16596-b097-4ed1-a7c4-400465010f52"}
                schedulerApiUrl="https://api.us.nylas.com"
              />
            </div>
          }
        />
        <Route
          path="/cancel"
          element={
            <div>
              <NylasScheduling
                cancelBookingId={Id}
                schedulerApiUrl="https://api.us.nylas.com"
              />
            </div>
          }
        />
        <Route
          path="/scheduler-editor"
          element={
            <div>
              <NylasSchedulerEditor
                //mode="composable"
                schedulerPreviewLink={`${window.location.origin}/?config_id={config.id}`}
                nylasSessionsConfig={{
                  clientId: "53bbaecc-13e7-42c8-be42-e900c780765a", // Replace with your Nylas client ID from the previous
                  redirectUri: `${window.location.origin}/scheduler-editor`,
                  domain: "https://api.us.nylas.com/v3", // or 'https://api.eu.nylas.com/v3' for EU data center
                  hosted: true,
                  accessType: "offline",
                }}
                defaultSchedulerConfigState={{
                  selectedConfiguration: {
                    scheduler: {
                      rescheduling_url: `${window.location.origin}/reschedule/?booking_ref=:booking_ref`,
                      cancellation_url: `${window.location.origin}/cancel/?booking_ref=:booking_ref`,
                    },
                  },
                }}
              />
              {/* <NylasBookingCalendarPicker/>
              <NylasEventInfo>
              <div slot="inputs">
                <NylasEventTitle />
              </div>
              </NylasEventInfo>
              <NylasAvailabilityPicker />
            </NylasSchedulerEditor> */}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
