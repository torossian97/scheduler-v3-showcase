import React from "react";
import { Box } from "@mui/material";
import { NylasSchedulerEditor } from "@nylas/react";
import CustomIdentityRequestWrapper from "../mocks/custom";

const UseCase2 = () => {
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
        // For your own, custom authentication
        nylasApiRequest={nylasApiRequest}
        // For OOTB, hosted authentication
        /*nylasSessionsConfig={{
          clientId: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX",
          redirectUri: `${window.location.origin}`,
          domain: "https://api.us.nylas.com/v3",
          hosted: true,
        }}*/

        // Set the default state to have the defaults you want when users create a new configuration / page
        defaultSchedulerConfigState={{
          selectedConfiguration: {
            requires_session_auth: false, // Set to 'false' to create a public configuration
          },
        }}
      />
    </Box>
  );
};

export default UseCase2;
