import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";

function FeaturedProperties() {
  return (
    <Fragment>
      {/* featured properties */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1024px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            flex: "1",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
            style={{ width: "100%", height: "150px" }}
          />
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            ApartHotel statue Miasto
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>Madrid</Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: "800" }}>
            Starting from $1200
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={{
                border: "none",
                backgroundColor: "primary.main",
                color: "white",
                padding: "3px",
                borderRadius: "4px",
                marginRight: "10px",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "white",
                },
              }}
            >
              8.9
            </Button>
            <Typography sx={{ fontSize: "9px" }}>Excellent</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src="https://www.xotels.com/wp-content/uploads/2020/03/hotel-room-type-xotels-hotel-management-company.webp"
            alt=""
            style={{ width: "100%", height: "150px" }}
          />
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            ApartHotel statue Miasto
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>Madrid</Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: "800" }}>
            Starting from $1200
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={{
                border: "none",
                backgroundColor: "primary.main",
                color: "white",
                padding: "3px",
                borderRadius: "4px",
                marginRight: "10px",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "white",
                },
              }}
            >
              8.9
            </Button>
            <Typography sx={{ fontSize: "9px" }}>Excellent</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/hotel-room-25969958.jpg"
            alt=""
            style={{ width: "100%", height: "150px" }}
          />
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            ApartHotel statue Miasto
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>Madrid</Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: "800" }}>
            Starting from $1200
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={{
                border: "none",
                backgroundColor: "primary.main",
                color: "white",
                padding: "3px",
                borderRadius: "4px",
                marginRight: "10px",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "white",
                },
              }}
            >
              8.9
            </Button>
            <Typography sx={{ fontSize: "9px" }}>Excellent</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000"
            alt=""
            style={{ width: "100%", height: "150px" }}
          />
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            ApartHotel statue Miasto
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>Madrid</Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: "800" }}>
            Starting from $1200
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={{
                border: "none",
                backgroundColor: "primary.main",
                color: "white",
                padding: "3px",
                borderRadius: "4px",
                marginRight: "10px",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "white",
                },
              }}
            >
              8.9
            </Button>
            <Typography sx={{ fontSize: "9px" }}>Excellent</Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default FeaturedProperties;
