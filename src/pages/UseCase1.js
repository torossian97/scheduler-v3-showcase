import React from "react";
import { Box, Typography } from "@mui/material";
import { NylasScheduling } from "@nylas/react";
import { Global, css } from "@emotion/react";

// Temp styling to circumvent bug, will remove in subsequent release
const style = css`
  ::part(ntp__button-primary) {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  ::part(nbf__button-primary) {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: auto !important;
  }

  ::part(nbf__button-outline) {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: auto !important;
  }
`;

const UseCase1 = () => {
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
      <Global styles={style} />
      {/* embed the scheduling component and feed it a configuration ID created through the Editor or /configurations endpoints */}
      <NylasScheduling css={style} configurationId="page-1" />
    </Box>
  );
};

export default UseCase1;
