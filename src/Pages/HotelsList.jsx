import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItems from "../Components/SearchItems";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProperties } from "../Redux/Actions/featuredHotels";

function HotelsList() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [max, setMax] = useState(undefined);
  const [min, setMin] = useState(undefined);

  const [showDateRange, setShowDateRange] = useState(false);

  useEffect(() => {
    dispatch(getFeaturedProperties(`city=${destination}`));
  }, [dispatch, destination, min, max]);

  const HotelsWithQuery = useSelector(
    (state) => state.featuredHotelsCountByCityTypesAndQuery
  );
  // console.log("hotels by city", HotelsWithQuery.featuredHotels);

  const toggleShowDateRange = () => {
    setShowDateRange(!showDateRange);
  };

  const clickSearch = () => {
    dispatch(
      getFeaturedProperties(
        `city=${destination}&min=${min || 0}&max=${max || 9999}`
      )
    );
  };
  // console.log(location);
  return (
    <Fragment>
      <Header type="hotelsList" />
      {/* hotels list container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
        }}
      >
        {/* row of search and hotels list */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1024px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* search component */}
          <Box
            sx={{
              flex: "10",
              backgroundColor: "secondary.main",
              p: 2,
              borderRadius: "10px",
              top: "20px",
              height: "max-content",
              mb: 5,
            }}
          >
            <Typography sx={{ fontSize: "18px", color: "white", mb: 3 }}>
              Search
            </Typography>
            {/* list item in search component */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                mb: 2,
              }}
            >
              <Typography sx={{ fontSize: "12px", color: "white" }}>
                Destination
              </Typography>
              <TextField
                variant="standard"
                placeholder={destination}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: "35px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                mb: 2,
              }}
            >
              <Typography sx={{ fontSize: "12px", color: "white" }}>
                Check In Date
              </Typography>
              <Typography
                onClick={toggleShowDateRange}
                sx={{
                  fontSize: "14px",
                  cursor: "pointer",
                  color: "primary.dark",
                  backgroundColor: "white",
                  p: 0.8,
                  borderRadius: "9px",
                  height: { xs: "40px", md: "20px" },
                }}
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </Typography>
              {showDateRange && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className="dateInSearchComponent"
                />
              )}
            </Box>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Options
            </Typography>
            <Box sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "30px",
                  mb: 1,
                }}
              >
                <Typography
                  component="p"
                  sx={{ fontSize: "12px", color: "white" }}
                >
                  Min Price{" "}
                  <Typography
                    component="span"
                    sx={{ fontSize: "8px", color: "white" }}
                  >
                    per night
                  </Typography>
                </Typography>
                <input
                  type="number"
                  style={{
                    border: "none",
                    outline: "none",
                    height: "30px",
                    width: "40px",
                    backgroundColor: "white",
                    borderRadius: "9px",
                  }}
                  onChange={(e) => setMin(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "30px",
                  mb: 1,
                }}
              >
                <Typography
                  component="p"
                  sx={{ fontSize: "12px", color: "white" }}
                >
                  Max Price{" "}
                  <Typography
                    component="span"
                    sx={{ fontSize: "8px", color: "white" }}
                  >
                    per night
                  </Typography>
                </Typography>
                <input
                  type="number"
                  style={{
                    border: "none",
                    outline: "none",
                    height: "30px",
                    width: "40px",
                    backgroundColor: "white",
                    borderRadius: "9px",
                  }}
                  onChange={(e) => setMax(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "30px",
                  mb: 1,
                }}
              >
                <Typography
                  component="p"
                  sx={{ fontSize: "12px", color: "white" }}
                >
                  Adults
                </Typography>
                <input
                  type="number"
                  style={{
                    border: "none",
                    outline: "none",
                    height: "30px",
                    width: "40px",
                    backgroundColor: "white",
                    borderRadius: "9px",
                  }}
                  variant="standard"
                  placeholder={options.adults}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "30px",
                  mb: 1,
                }}
              >
                <Typography
                  component="p"
                  sx={{ fontSize: "12px", color: "white" }}
                >
                  Children
                </Typography>
                <input
                  type="number"
                  style={{
                    border: "none",
                    outline: "none",
                    height: "30px",
                    width: "40px",
                    backgroundColor: "white",
                    borderRadius: "9px",
                  }}
                  variant="standard"
                  placeholder={options.children}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "30px",
                  mb: 1,
                }}
              >
                <Typography
                  component="p"
                  sx={{ fontSize: "12px", color: "white" }}
                >
                  Room
                </Typography>
                <input
                  type="number"
                  style={{
                    border: "none",
                    outline: "none",
                    height: "30px",
                    width: "40px",
                    backgroundColor: "white",
                    borderRadius: "9px",
                  }}
                  variant="standard"
                  placeholder={options.room}
                />
              </Box>
            </Box>
            <Button
              onClick={clickSearch}
              sx={{
                width: "100%",
                backgroundColor: "primary.dark",
                color: "white",
                p: 0.5,
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              Search
            </Button>
          </Box>
          {/* list component, result rooms for search */}
          {HotelsWithQuery.loading && <CircularProgress />}
          {Array.isArray(HotelsWithQuery.featuredHotels) &&
            HotelsWithQuery.featuredHotels.map((item, idx) => (
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={idx}
              >
                <SearchItems item={item} />
              </Box>
            ))}
        </Box>
      </Box>
    </Fragment>
  );
}

export default HotelsList;
