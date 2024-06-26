import React from "react";
import { Box } from "@mui/material";
import {
  NylasSchedulerEditor,
  NylasBookingCalendarPicker,
  NylasEventInfo,
  NylasEventTitle,
  NylasAvailabilityPicker,
} from "@nylas/react";
import CustomIdentityRequestWrapper from "../mocks/custom";

const UseCase5 = () => {
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
        // composable can also be used for the Editor component
        // It's applied to the "edit page" view
        mode="composable"
        configurationId="page-1"
      >
        <div
          style={{
            height: "550px", // Whatever height they want to set it to
            overflowY: "scroll",
          }}
        >
          <NylasBookingCalendarPicker />
          <NylasEventInfo>
            <div slot="inputs">
              <NylasEventTitle />
            </div>
          </NylasEventInfo>
          <NylasAvailabilityPicker />
        </div>
      </NylasSchedulerEditor>
    </Box>
  );
};

export default UseCase5;
