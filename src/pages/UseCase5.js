/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  NylasSchedulerEditor,
  NylasBookingCalendarPicker,
  NylasEventInfo,
  NylasEventTitle,
} from "@nylas/react";
import CustomIdentityRequestWrapper from "../mocks/custom";

const editorStyles = css`
  ::part(nse__header) {
    display: none;
  }
`;

const nbcpStyles = css`
  ::part(nbcp) {
    border: none;
  }

  ::part(nbcp__header) {
    display: none;
  }
`;

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
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Scheduling Page 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NylasSchedulerEditor
            css={editorStyles}
            nylasApiRequest={nylasApiRequest}
            mode="composable"
            configurationId="page-1"
            defaultSchedulerConfigState={{
              selectedConfiguration: {
                id: "page-1",
                version: "1.0.0",
                participants: [
                  {
                    email: "antoine.torossian@nylas.com",
                    is_organizer: true,
                    name: "antoine.torossian@nylas.com",
                    availability: {
                      calendar_ids: ["primary"],
                    },
                    booking: {
                      calendar_id: "antoine.torossian@nylas.com",
                    },
                  },
                ],
                requires_session_auth: false,
                availability: {
                  duration_minutes: 20,
                  interval_minutes: 20,
                  round_to: 20,
                  availability_rules: {
                    availability_method: "collective",
                    buffer: {
                      before: 0,
                      after: 0,
                    },
                    default_open_hours: [
                      {
                        days: [1, 2, 3, 4, 6],
                        exdates: null,
                        timezone: "America/Vancouver",
                        start: "09:00",
                        end: "17:00",
                      },
                      {
                        days: [5],
                        exdates: null,
                        timezone: "America/Vancouver",
                        start: "09:13",
                        end: "17:00",
                      },
                    ],
                    round_robin_group_id: "",
                  },
                },
                event_booking: {
                  title: "Overload",
                  timezone: "America/Vancouver",
                  booking_type: "booking",
                  hide_participants: null,
                  disable_emails: null,
                },
                scheduler: {
                  available_days_in_future: 30,
                  min_cancellation_notice: 0,
                  min_booking_notice: 60,
                  rescheduling_url:
                    "https://cal.nylas.com/scheduler/reschedule/:booking_ref",
                  cancellation_url:
                    "https://cal.nylas.com/scheduler/cancel/:booking_ref",
                  hide_rescheduling_options: true,
                  hide_cancellation_options: false,
                  hide_additional_guests: true,
                  cancellation_policy: "Please tell me why you're leaving me!",
                },
              },
            }}
            eventOverrides={{
              editButtonClick: (event, connector) => {
                event.preventDefault();
                connector.SchedulerConfig.createConfiguration();
              },
            }}
          >
            <div
              style={{
                overflowY: "scroll",
              }}
            >
              <NylasBookingCalendarPicker css={nbcpStyles} />
              <NylasEventInfo>
                <div slot="inputs">
                  <NylasEventTitle />
                </div>
              </NylasEventInfo>
            </div>
          </NylasSchedulerEditor>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Scheduling Page 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NylasSchedulerEditor
            css={editorStyles}
            nylasApiRequest={nylasApiRequest}
            mode="composable"
            configurationId="page-2"
            eventOverrides={{}}
          >
            <div
              style={{
                overflowY: "scroll",
              }}
            >
              <NylasBookingCalendarPicker css={nbcpStyles} />
              <NylasEventInfo>
                <div slot="inputs">
                  <NylasEventTitle />
                </div>
              </NylasEventInfo>
            </div>
          </NylasSchedulerEditor>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default UseCase5;
