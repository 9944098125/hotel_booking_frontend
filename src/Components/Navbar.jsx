import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <Box
        sx={{
          height: "100%",
          backgroundColor: "primary.dark",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pr: 5,
          pl: 5,
        }}
      >
        {/* Head of the app */}
        <Box sx={{}}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: { xs: "500", md: "600" },
                fontSize: { xs: "16px", md: "25px" },
                cursor: "pointer",
              }}
            >
              Sunset Suites
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "10px", md: "18px" },
                fontWeight: { xs: "300", md: "500" },
                cursor: "pointer",
              }}
            >
              Login
            </Typography>
          </Link>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "10px", md: "18px" },
              fontWeight: { xs: "300", md: "500" },
              cursor: "pointer",
            }}
          >
            Register
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Navbar;
