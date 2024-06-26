import React from "react";
import { Box } from "@mui/material";
import { NylasSchedulerEditor } from "@nylas/react";
import CustomIdentityRequestWrapper from "../mocks/custom";

const UseCase9 = () => {
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
          "availability",
          "bookingForm",
          "communications",
        ]}
        configurationId="page-1"
        // These participants must be auth'ed to your app already
        // You determine who you want to add. They will be used for Collective
        // availability or round-robin, depending on the booking type
        additionalParticipants={[
          {
            name: "Billy Bob",
            email: "billybobthornton@example.com",
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

export default UseCase9;
