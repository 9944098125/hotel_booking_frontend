import { Box, Typography } from "@mui/material";
import React from "react";
import Featured from "../Components/Featured";
import FeaturedProperties from "../Components/FeaturedProperties";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MailList from "../Components/MailList";
import PropertyList from "../Components/PropertyList";

function Home() {
  return (
    <>
      <Header />
      {/* home container */}
      <Box
        sx={{
          mt: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          px: "15%",
        }}
      >
        <Featured />
        <Typography
          sx={{ fontSize: { xs: "14px", md: "19px" }, alignSelf: "flex-start" }}
        >
          Browse By Property Types
        </Typography>
        <PropertyList />
        <Typography
          sx={{ fontSize: { xs: "14px", md: "19px" }, alignSelf: "flex-start" }}
        >
          Home Guests Love
        </Typography>
        <FeaturedProperties />
        <MailList />
      </Box>
    </>
  );
}

export default Home;
