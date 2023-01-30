import React, { Fragment, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { countByCity } from "../Redux/Actions/countByCity";
import { useSelector, useDispatch } from "react-redux";

function Featured() {
  const dispatch = useDispatch();
  const GetCount = useSelector((state) => state.count);

  useEffect(() => {
    dispatch(countByCity());
  }, [dispatch]);

  return (
    <Fragment>
      {/* features container */}
      {GetCount.count && (
        <Box
          sx={{
            width: "100%",
            maxWidth: "1024px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            zIndex: "1",
          }}
        >
          {/* each item */}
          {
            <>
              <Box
                sx={{
                  position: "relative",
                  height: "250px",
                  color: "white",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    height: "100%",
                  }}
                  alt="featuredImage1"
                />
                <Box
                  sx={{ position: "absolute", bottom: "20px", left: "20px" }}
                >
                  <Typography sx={{}}>Kakinada</Typography>
                  <Typography sx={{}}>
                    {GetCount.count[0]} Properties
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  height: "250px",
                  color: "white",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://www.royalorchidhotels.com/images/propertygallery/04_Nov_2022_06_33_01Deluxe%20Twin%20Room.jpg"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    height: "100%",
                  }}
                  alt="featuredImage2"
                />
                <Box
                  sx={{ position: "absolute", bottom: "20px", left: "20px" }}
                >
                  <Typography sx={{}}>Banglore</Typography>
                  <Typography sx={{}}>
                    {GetCount.count[1]} Properties
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  height: "250px",
                  color: "white",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    height: "100%",
                  }}
                  alt="featuredImage3"
                />
                <Box
                  sx={{ position: "absolute", bottom: "20px", left: "20px" }}
                >
                  <Typography sx={{}}>Pune</Typography>
                  <Typography sx={{}}>
                    {GetCount.count[2]} Properties
                  </Typography>
                </Box>
              </Box>
            </>
          }
        </Box>
      )}
    </Fragment>
  );
}

export default Featured;
