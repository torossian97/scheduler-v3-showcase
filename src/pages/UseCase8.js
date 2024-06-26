import React from "react";
import { Box } from "@mui/material";
import { NylasSchedulerEditor } from "@nylas/react";
import CustomIdentityRequestWrapper from "../mocks/custom";

const UseCase8 = () => {
  const nylasApiRequest = new CustomIdentityRequestWrapper("MOCK_ACCESS_TOKEN");

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
      <NylasSchedulerEditor
        nylasApiRequest={nylasApiRequest}
        // Hide Whatever editor tabs you like
        hideEditorTabs={[
          "eventInfo",
          "bookingOptions",
          "participants",
          "availability",
        ]}
        configurationId="page-1"
      />
    </Box>
  );
};

export default UseCase8;
