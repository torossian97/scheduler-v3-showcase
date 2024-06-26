/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  NylasSchedulerEditor,
  NylasBookingCalendarPicker,
  NylasEventInfo,
  NylasEventTitle,
  NylasAdditionalParticipants,
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
`;

const UseCase13 = () => {
  const [open, setOpen] = useState(false);
  const [scheduleLink, setScheduleLink] = useState("");
  const nylasApiRequest = new CustomIdentityRequestWrapper("MOCK_ACCESS_TOKEN");

  useEffect(() => {
    const changeButtonLabel = () => {
      const button = document.querySelector("::part(editor__footer-cta)");
      if (button) {
        button.textContent = "New Button Label";
      }
    };

    changeButtonLabel();
  }, []);

  const handleClickOpen = (data) => {
    setScheduleLink(`https://schedule.example.com/${data.id}`);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        css={editorStyles}
        nylasApiRequest={nylasApiRequest}
        mode="composable"
        configurationId="page-1"
        eventOverrides={{
          schedulerEditorFormUpdated: (event, connector) => {
            event.preventDefault();
            connector.schedulerConfig.createConfiguration().then((data) => {
              handleClickOpen(data);
            });
          },
        }}
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
      >
        <div
          style={{
            overflowY: "scroll",
          }}
        >
          <NylasAdditionalParticipants />
        </div>
      </NylasSchedulerEditor>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Schedule Link</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="schedule-link"
            label="Schedule Link"
            type="text"
            fullWidth
            value={scheduleLink}
            InputProps={{
              readOnly: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UseCase13;
