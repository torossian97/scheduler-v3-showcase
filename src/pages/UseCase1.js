import React from "react";
import { Box, Typography } from "@mui/material";
import { NylasScheduling } from "@nylas/react";

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
      <NylasScheduling
        configurationId="page-1"
        themeConfig={{ "--nylas-font-family": '"Poppins", sans-serif' }}
      />
    </Box>
  );
};

export default UseCase1;
