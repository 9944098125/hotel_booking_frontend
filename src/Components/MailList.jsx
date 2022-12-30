import React, { Fragment } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";

function MailList() {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          p: 3,
          backgroundColor: "primary.dark",
          color: "white",
          width: "100%",
        }}
      >
        <Typography sx={{}}>Save Money, Save Time</Typography>
        <Typography sx={{}}>
          Sign Up and we will send best deals to you...
        </Typography>
        <Box
          sx={{
            width: { xs: "250px", md: "350px" },
            height: "30px",
            p: 2,
            border: "none",
          }}
        >
          <TextField
            variant="standard"
            sx={{
              backgroundColor: "white",
              width: "70%",
              height: "100%",
              outline: "none",
            }}
          />
          <Button
            sx={{
              width: "30%",
              height: "100%",
              p: 1,
              fontSize: { xs: "10px", md: "12px" },
              backgroundColor: "yellow",
              "&:hover": {
                backgroundColor: amber[500],
                color: "white",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}

export default MailList;
