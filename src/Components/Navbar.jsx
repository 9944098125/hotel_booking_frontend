import { Box, Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log("user", user);

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
        {user !== null ? (
          <Typography
            sx={{
              color: "white",
              fontWeight: "700",
              fontSize: { xs: "12px", md: "16px" },
            }}
          >
            {user.username}
          </Typography>
        ) : (
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
            <Link
              to="/register"
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
                Register
              </Typography>
            </Link>
          </Box>
        )}
      </Box>
    </Fragment>
  );
}

export default Navbar;
