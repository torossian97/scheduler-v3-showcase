import React from "react";
import { Box, Typography } from "@mui/material";
import { NylasScheduling } from "@nylas/react";
import { css } from "@emotion/react";

// Temp styling to circumvent bug, will remove in subsequent release
const style = css`
  ::part(ntp__button-primary) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ::part(nbf__button-primary) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
  }

  ::part(nbf__button-outline) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
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
      {/* embed the scheduling component and feed it a configuration ID created through the Editor or /configurations endpoints */}
      <NylasScheduling css={style} configurationId="page-1" />
    </Box>
  );
};

export default UseCase1;
