import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";

function PropertyList() {
  return (
    <Fragment>
      {/* property list */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1024px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* item */}
        <Box
          sx={{
            borderRadius: "10px",
            overflow: "hidden",
            cursor: "pointer",
            flex: "1",
          }}
        >
          <img
            src="https://images.jdmagicbox.com/comp/bangalore/k3/080pxx80.xx80.121218130435.q4k3/catalogue/bengaluru-marriott-hotel-whitefield-bangalore-hotels-ukntygk37d-250.jpg?temp=1"
            style={{
              objectFit: "cover",
              height: "150px",
              width: "100%",
            }}
            alt="pl"
          />
          <Box sx={{}}>
            <Typography sx={{ fontSize: "18px" }}>Hotels</Typography>
            <Typography sx={{ fontSize: "16px" }}>235 hotels</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            overflow: "hidden",
            cursor: "pointer",
            flex: "1",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"
            style={{
              objectFit: "cover",
              height: "150px",
              width: "100%",
            }}
            alt="pl"
          />
          <Box sx={{}}>
            <Typography sx={{ fontSize: "18px" }}> Apartments</Typography>
            <Typography sx={{ fontSize: "16px" }}>175 hotels</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            overflow: "hidden",
            cursor: "pointer",
            flex: "1",
          }}
        >
          <img
            src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/headmast-desktop/welcomhotel-bhubaneswar.jpg"
            style={{
              objectFit: "cover",
              height: "150px",
              width: "100%",
            }}
            alt="pl"
          />
          <Box sx={{}}>
            <Typography sx={{ fontSize: "18px" }}>Resorts</Typography>
            <Typography sx={{ fontSize: "16px" }}>159 hotels</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            overflow: "hidden",
            cursor: "pointer",
            flex: "1",
          }}
        >
          <img
            src="https://www.theparkhotels.com/images/site-specific/navi-mumbai/home/navi-mumbai-night-view.jpg"
            style={{
              objectFit: "cover",
              height: "150px",
              width: "100%",
            }}
            alt="pl"
          />
          <Box sx={{}}>
            <Typography sx={{ fontSize: "18px" }}>Villas</Typography>
            <Typography sx={{ fontSize: "16px" }}>280 hotels</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            overflow: "hidden",
            cursor: "pointer",
            flex: "1",
          }}
        >
          <img
            src="https://www.lux-review.com/wp-content/uploads/2019/09/turkish-hotel.jpg"
            style={{
              objectFit: "cover",
              height: "150px",
              width: "100%",
            }}
            alt="pl"
          />
          <Box sx={{}}>
            <Typography sx={{ fontSize: "18px" }}>Cabins</Typography>
            <Typography sx={{ fontSize: "16px" }}>300 hotels</Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default PropertyList;
