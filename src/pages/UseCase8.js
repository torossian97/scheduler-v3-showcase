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
        hideEditorTabs={[
          "eventInfo",
          "bookingOptions",
          "participants",
          "availability",
        ]}
        configurationId="page-1"
        additionalParticipants={[
          {
            name: "Bob Thornton",
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

export default UseCase8;
