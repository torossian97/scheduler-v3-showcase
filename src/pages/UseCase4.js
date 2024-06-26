import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { NylasScheduling, NylasTimeslotPicker } from "@nylas/react";
import CustomIdentityRequestWrapper from "../mocks/custom";

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

const participants = [
  {
    name: "John Smith",
    email: "john.smith@example.com",
    description: "Project Manager",
    configId: "page-1",
  },
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    description: "Software Engineer",
    configId: "page-2",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    description: "UX Designer",
    configId: "page-3",
  },
];

const UseCase4 = () => {
  const [selectedParticipant, setSelectedParticipant] = useState(
    participants[0]
  );
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const nylasApiRequest = new CustomIdentityRequestWrapper("MOCK_ACCESS_TOKEN");

  const handleParticipantClick = (participant) => {
    setSelectedParticipant(participant);
    setBookingConfirmed(false); // Reset booking confirmation when switching participants
    setBookingDetails(null);
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "400px",
          height: "500px",
          boxShadow: 3,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Schedule a meeting today with...
        </Typography>
        <List sx={{ flex: 1 }}>
          {participants.map((participant) => (
            <ListItem
              button
              key={participant.configId + Math.random(1, 4, 0)}
              onClick={() => handleParticipantClick(participant)}
              sx={{
                marginBottom: "10px",
                borderRadius: "5px",
                bgcolor:
                  participant.configId === selectedParticipant.configId
                    ? "#d3d3d3"
                    : "transparent",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <ListItemText
                  primary={participant.name}
                  secondary={participant.description}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
      {bookingConfirmed ? (
        <Paper
          elevation={3}
          sx={{
            padding: "20px",
            width: "300px",
            height: "500px",
          }}
        >
          <Typography variant="h6" style={{ color: "#2563EB" }} gutterBottom>
            Booking Successful!
          </Typography>
          <Typography variant="body1">
            Your meeting with {bookingDetails?.name} is confirmed.
          </Typography>
          <Typography variant="body1">
            Email: {bookingDetails?.email}
          </Typography>
          <Typography variant="body1">
            Time:{" "}
            {new Date(bookingDetails?.start_time * 1000)
              .toUTCString()
              .toLocaleString()}
          </Typography>
        </Paper>
      ) : (
        <>
          <NylasScheduling
            key={selectedParticipant.configId} // Use key prop to force re-render
            // Enable composable mode, allows composability in the component's slot
            css={style}
            mode="composable"
            configurationId={selectedParticipant.configId}
            // Override the default behaviour of the timeSlotConfirmed click
            // Use connector to directly book a time, handle the response
            eventOverrides={{
              timeslotConfirmed: (event, connector) => {
                event.preventDefault();
                connector.scheduler
                  .bookTimeslot({
                    primaryParticipant: {
                      name: selectedParticipant.name,
                      email: selectedParticipant.email,
                    },
                  })
                  .then((resp) => {
                    setBookingDetails(resp.data);
                    setBookingConfirmed(true);
                  });
              },
            }}
          >
            <NylasTimeslotPicker style={{ height: "500px", width: "300px" }} />
          </NylasScheduling>
        </>
      )}
    </Box>
  );
};

export default UseCase4;
