import React, { Fragment, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { countByType } from "../Redux/Actions/countByCity";
import { useDispatch, useSelector } from "react-redux";

function PropertyList() {
  const dispatch = useDispatch();

  const GetCount = useSelector((state) => state.count);

  useEffect(() => {
    dispatch(countByType());
  }, [dispatch]);

  const images = [
    "https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg",
    "https://media.istockphoto.com/id/1322575582/photo/exterior-view-of-modern-apartment-building-offering-luxury-rental-units-in-silicon-valley.jpg?b=1&s=170667a&w=0&k=20&c=0s6qL5cIMm6LSnryH40h5GmaM6jCi11kchWzsaTJGZE=",
    "https://img.freepik.com/free-photo/hammocks-with-palm-trees_1203-201.jpg?w=2000",
    "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?b=1&s=612x612&w=0&k=20&c=vcCQ5L9Tt2ZurwFhtodR6njSUnMsEn_ZqEmsa0hs9lM=",
    "https://media.istockphoto.com/id/93463536/photo/log-cabin-in-the-forest.jpg?s=612x612&w=0&k=20&c=IbmnfgsVh77KdM2XLIz-pjWXRs1hlkBEoEzxpk41F6U=",
  ];

  return (
    <Fragment>
      {/* property list */}
      {GetCount.types && (
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
          {GetCount.types &&
            images.map((image, i) => (
              <Box
                key={i}
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  flex: "1",
                }}
              >
                <img
                  src={image}
                  style={{
                    objectFit: "cover",
                    height: "150px",
                    width: "100%",
                  }}
                  alt="pl"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: "18px" }}>
                    {GetCount.types[i]?.count} {GetCount.types[i]?.type}s
                  </Typography>
                  <Typography sx={{ fontSize: "16px" }}></Typography>
                </Box>
              </Box>
            ))}
        </Box>
      )}
    </Fragment>
  );
}

export default PropertyList;
