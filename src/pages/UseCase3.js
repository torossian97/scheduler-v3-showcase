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
    background: #db2777;
  }

  ::part(nbf__button-primary) {
    background: #eb5da6;
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
        configurationId="page-1"
        // ThemeConfig gives you an easy way to adjust colour schemes for the whole component
        themeConfig={{
          "--nylas-primary": "#DB2777", // Brand color
          "--nylas-info": "#6EC1E4", // Complementary color
          "--nylas-success": "#68B684", // Complementary color
          "--nylas-warning": "#FFC857", // Complementary color
          "--nylas-error": "#F45B69", // Complementary color
          "--nylas-error-pressed": "#c24758", // Darker shade of complementary color
          "--nylas-base-0": "#fce7ef", // Very light shade of brand color
          "--nylas-base-25": "#f8c3d8", // Light shade of brand color
          "--nylas-base-50": "#f4a1c2", // Light shade of brand color
          "--nylas-base-100": "#ffffff", // Light shade of brand color
          "--nylas-base-200": "#eb5da6", // Brand color
          "--nylas-base-300": "#db2777", // Brand color
          "--nylas-base-400": "#c21b67", // Darker shade of brand color
          "--nylas-base-500": "#a91757", // Darker shade of brand color
          "--nylas-base-600": "#891343", // Darker shade of brand color
          "--nylas-base-700": "#68102f", // Darker shade of brand color
          "--nylas-base-800": "#470c1b", // Darker shade of brand color
          "--nylas-base-900": "#250709", // Darkest shade of brand color
          "--nylas-base-950": "#120305", // Darkest shade of brand color
          "--nylas-font-family": '"Poppins", sans-serif',
          "--nylas-border-radius": "0.25rem",
        }}
      />
    </Box>
  );
};

export default UseCase3;
