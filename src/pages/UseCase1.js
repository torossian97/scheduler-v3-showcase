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
        configurationId="scenario-1"
        eventOverrides={{
          dateSelected: (event, connector) => {
            console.log(connector.schedulerStore.get("selectedTimeslot"));
          },
        }}
        defaultSchedulerState={{
          nylasBranding: false,
          // availability: [
          //   {
          //     emails: ["antoine.torossian@nylas.com"],
          //     start_time: new Date("2024-06-08T12:30:00"),
          //     end_time: new Date("2024-06-08T13:00:00"),
          //   },
          //   {
          //     emails: ["antoine.torossian@nylas.com"],
          //     start_time: new Date("2024-06-08T09:30:00"),
          //     end_time: new Date("2024-06-08T10:00:00"),
          //   },
          //   {
          //     emails: ["antoine.torossian@nylas.com"],
          //     start_time: new Date("2024-06-08T01:30:00"),
          //     end_time: new Date("2024-06-08T02:00:00"),
          //   },
          //   {
          //     emails: ["antoine.torossian@nylas.com"],
          //     start_time: new Date("2024-06-08T22:30:00"),
          //     end_time: new Date("2024-06-08T23:00:00"),
          //   },
          // ],
          // selectableDates: [
          //   new Date("2024-06-7"),
          //   new Date("2024-06-8"),
          //   new Date("2024-06-9"),
          // ],
          // selectedDate: new Date("2024-06-08"),
          // selectedTimeslot: {
          //   start_time: new Date("2024-06-08T12:30:00"),
          //   end_time: new Date("2024-06-08T13:00:00"),
          // },
          configSettings: {
            scheduler: {
              available_days_in_future: 14,
              min_cancellation_notice: 1,
              min_booking_notice: 1,
            },
          },
          organizer: {
            name: "antoine",
            email: "antoine.torossian@nylas.com",
          },
        }}
      />
    </Box>
  );
};

export default UseCase1;
