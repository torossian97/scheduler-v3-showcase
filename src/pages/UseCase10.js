import React from "react";
import { Box } from "@mui/material";
import { NylasSchedulerEditor } from "@nylas/react";
import CustomIdentityRequestWrapper from "../mocks/custom";

const UseCase10 = () => {
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
        hideEditorTabs={[
          "eventInfo",
          "bookingOptions",
          "bookingForm",
          "communications",
        ]}
        configurationId="page-3"
        // These participants must be auth'ed to your app already
        // You determine who you want to add. They will be used for Collective
        // availability or round-robin, depending on the booking type.
        // Round-robin is activated when the config has it as the booking type
        additionalParticipants={[
          {
            name: "Jiminy Cricket",
            email: "cricketboy@example.com",
            calendars: [
              {
                id: "123456",
                name: "Vacation Calendar",
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default UseCase10;
