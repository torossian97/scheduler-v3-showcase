/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import {
  NylasScheduling,
  InputComponent,
  CheckboxComponent,
} from "@nylas/react";

const schedulingStyles = css`
  ::part(nbf__button-outline) {
    display: none;
  }

  ::part(nbf__button-primary) {
    width: 100%;
  }
`;

const getNearestFuture30MinuteSlot = () => {
  const date = new Date();
  const minutes = date.getMinutes();

  if (minutes >= 0 && minutes < 30) {
    date.setMinutes(30);
  } else {
    date.setHours(date.getHours() + 1);
    date.setMinutes(0);
  }

  date.setSeconds(0);
  date.setMilliseconds(0);

  const start_time = new Date(date);
  const end_time = new Date(start_time);
  end_time.setMinutes(start_time.getMinutes() + 30);

  return { start_time, end_time };
};

const UseCase6 = () => {
  const { start_time, end_time } = getNearestFuture30MinuteSlot();

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
        css={schedulingStyles}
        configurationId="page-1"
        eventOverrides={{
          dateSelected: (event, connector) => {
            console.log(connector.schedulerStore.get("selectedTimeslot"));
          },
        }}
        defaultSchedulerState={{
          showBookingForm: true,
          selectedTimeslot: {
            start_time,
            end_time,
          },
        }}
      >
        <div slot="custom-booking-form">
          <InputComponent
            label="My custom text"
            required={true}
            pattern="/Nylas/gm"
            patternError="You must type 'Nylas'"
            style={{
              paddingBottom: "15px",
            }}
          />
          <CheckboxComponent
            label="my custom checkbox"
            paddingTop="30px"
            style={{
              paddingBottom: "15px",
            }}
          />
          <InputComponent
            label="My custom text"
            style={{
              paddingBottom: "15px",
            }}
          />
        </div>
      </NylasScheduling>
    </Box>
  );
};

export default UseCase6;
