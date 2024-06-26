/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
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
    box: none;
  }
  ::part(editor__footer-cancel) {
    display: none;
  }
  ::part(editor__footer) {
    border: none;
  }
`;

const nbcpStyles = css`
  ::part(nbcp) {
    border: none;
    margin: 0px;
  }

  ::part(nbcp__header) {
    display: none;
  }
`;

const nfcStyles = css`
  ::part(nei__header) {
    display: none;
    border: none;
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
            eventOverrides={{
              editButtonClick: (event, connector) => {
                event.preventDefault();
                connector.SchedulerConfig.createConfiguration();
              },
            }}
            style={{
              boxShadow: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <div
              style={{
                overflowY: "scroll",
              }}
            >
              <NylasBookingCalendarPicker css={nbcpStyles} />
              <NylasEventInfo css={nfcStyles}>
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
            style={{
              boxShadow: "none",
            }}
          >
            <div
              style={{
                overflowY: "scroll",
              }}
            >
              <NylasBookingCalendarPicker css={nbcpStyles} />
              <NylasEventInfo css={nfcStyles}>
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
          <Typography>Scheduling Page 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NylasSchedulerEditor
            css={editorStyles}
            nylasApiRequest={nylasApiRequest}
            mode="composable"
            configurationId="page-3"
            style={{
              boxShadow: "none",
            }}
          >
            <div
              style={{
                overflowY: "scroll",
              }}
            >
              <NylasBookingCalendarPicker css={nbcpStyles} />
              <NylasEventInfo css={nfcStyles}>
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
