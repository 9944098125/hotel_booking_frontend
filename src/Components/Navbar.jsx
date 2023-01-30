import { Box, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/login";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const LoginDetails = useSelector((state) => state.auth);
  // console.log("user", user);

  const logoutFunction = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        {LoginDetails.token && user ? (
          <>
            <Box
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography sx={{ color: "white", fontWeight: "700" }}>
                {user.username}
              </Typography>
              <Avatar
                src={user.profilePicture}
                sx={{ ml: 2, cursor: "pointer" }}
              />
            </Box>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem>
                <Typography sx={{}}>My Profile</Typography>
              </MenuItem>
              <MenuItem onClick={logoutFunction}>Logout</MenuItem>
            </Menu>
          </>
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
