import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import useFetch from "../Hooks/useFetch";

function FeaturedProperties() {
  const { data, error, loading } = useFetch("/hotels?featured=true&limit=4");
  // console.log(data);

  return (
    <Fragment>
      {/* featured properties */}
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        data.hotels && (
          <Box
            sx={{
              width: { xs: "100%", md: "100%" },
              maxWidth: "1024px",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {data.hotels.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  width: "250px",
                  gap: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={
                    item.photos[0]
                      ? item.photos[0]
                      : "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  }
                  alt=""
                  style={{ width: "100%", height: "150px" }}
                />
                <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>{item.city}</Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: "800" }}>
                  Starting from ${item.cheapestPrice}
                </Typography>
                {item.rating && (
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
                      {item.rating}
                    </Button>
                    <Typography sx={{ fontSize: "9px" }}>Excellent</Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        )
      )}
    </Fragment>
  );
}

export default FeaturedProperties;
