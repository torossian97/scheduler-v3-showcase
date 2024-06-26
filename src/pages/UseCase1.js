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
      <NylasScheduling
        schedulerApiUrl="https://api-staging.us.nylas.com"
        configurationId="page-1"
      />
    </Box>
  );
};

export default UseCase1;
