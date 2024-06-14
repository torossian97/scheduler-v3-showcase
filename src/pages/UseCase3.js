/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import { NylasScheduling } from "@nylas/react";

const schedulingStyles = css`
  /* Scheduling */
  /* rounded corners */
  ::part(ndp__date) {
    border-radius: 30px;
  }

  /* background */
  ::part(ndp__date--selected) {
    background: #e6cfa3;
  }
`;

const UseCase3 = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NylasScheduling
        css={schedulingStyles}
        schedulerApiUrl="https://api-staging.us.nylas.com"
        configurationId="scenario-1"
        defaultSchedulerState={{
          configSettings: {
            scheduler: {
              available_days_in_future: 14,
              min_cancellation_notice: 1,
              min_booking_notice: 1,
            },
          },
          organizer: {
            name: "antoine",
            email: "antoine.torossian@nylas.com",
          },
        }}
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
    </Box>
  );
};

export default UseCase3;
