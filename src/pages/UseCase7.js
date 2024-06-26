/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import { NylasScheduling } from "@nylas/react";

const UseCase7 = () => {
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
      <div style={{ fontFamily: "sans-serif", margin: 0, padding: 0 }}>
        <table
          border="0"
          cellSpacing="0"
          cellPadding="0"
          style={{ maxWidth: "600px" }}
        >
          <tbody>
            <tr>
              <td height="15" bgcolor="#eee" colSpan="3">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="15" bgcolor="#eee">
                &nbsp;
              </td>
              <td
                style={{
                  padding: "15px",
                  paddingBottom: "25px",
                  backgroundColor: "white",
                  minWidth: "500px",
                }}
              >
                <img
                  src="https://brand.nylas.com/assets/downloads/logo_stacked_png/Nylas-Logo-Stacked-Blue_.png"
                  alt=""
                  style={{
                    maxWidth: "200px",
                    maxHeight: "100px",
                    marginBottom: "30px",
                  }}
                />
                <h1
                  style={{
                    fontWeight: 400,
                    marginBottom: "0px",
                    marginTop: 0,
                  }}
                >
                  Booking Confirmed
                </h1>
                <p style={{ fontSize: "15px" }}>Hi user@nylas.com,</p>
                <p style={{ fontSize: "15px" }}>You have a new booking.</p>
                <hr
                  color="#ccc"
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                />
                <table>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          color: "#999",
                          width: "120px",
                          maxWidth: "250px",
                          fontSize: "15px",
                          padding: "3px 0",
                        }}
                      >
                        What
                      </td>
                      <td>New meeting with Nylas</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "#999",
                          fontSize: "15px",
                          padding: "3px 0",
                        }}
                      >
                        Where
                      </td>
                      <td>Location TBD</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "#999",
                          fontSize: "15px",
                          padding: "3px 0",
                        }}
                      >
                        Start
                      </td>
                      <td>Sat, May 25, 2024 9:40 AM</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "#999",
                          fontSize: "15px",
                          padding: "3px 0",
                        }}
                      >
                        End
                      </td>
                      <td>Sat, May 25, 2024 10:00 AM</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "#999",
                          fontSize: "15px",
                          padding: "3px 0",
                        }}
                      >
                        Timezone
                      </td>
                      <td>America/Vancouver</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "#999",
                          fontSize: "15px",
                          padding: "3px 0",
                        }}
                      >
                        Name
                      </td>
                      <td>Invitee</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "#999",
                          fontSize: "15px",
                          padding: "3px 0",
                        }}
                      >
                        Email
                      </td>
                      <td>
                        <table style={{ maxHeight: "10em", overflow: "auto" }}>
                          <tbody>
                            <tr>
                              <td>invitee@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "#999",
                          fontSize: "15px",
                          padding: "3px 0",
                        }}
                      >
                        Custom Field
                      </td>
                      <td>
                        <table style={{ maxHeight: "10em", overflow: "auto" }}>
                          <tbody>
                            <tr>
                              <td>custom answer</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <hr
                  color="#ccc"
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                />
                <p style={{ fontSize: "15px", lineHeight: "23px" }}>
                  This booking is confirmed. To modify the booking, click the
                  links below:
                  <br />
                  <a href="" style={{ marginRight: "10px" }}>
                    Cancel
                  </a>
                  <a href="">Reschedule</a>
                </p>
              </td>
              <td width="15" bgcolor="#eee">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td height="20" bgcolor="#eee" colSpan="3">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td bgcolor="#eee" colSpan="3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Box>
  );
};

export default UseCase7;
