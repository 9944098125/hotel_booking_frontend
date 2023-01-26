import React, { Fragment, useState, useContext } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AttractionsIcon from "@mui/icons-material/Attractions";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { amber } from "@mui/material/colors";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Context/searchContext";

function Header({ type }) {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleOptionChange = (name, operation) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]:
          operation === "increment" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { dates, destination, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  const login = () => {
    navigate("/login");
  };

  function logout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <Fragment>
      {/* total container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.dark",
          color: "white",
          position: "relative",
        }}
      >
        {/* header container */}
        <Box
          sx={{
            width: "100%",
            pt: "20px",
            pb: `${type === "hotelsList" ? "15px" : "100px"}`,
            ml: 10,
          }}
        >
          {/* header list */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {/* list items */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "5px", md: "10px" },
                cursor: "pointer",
                border: "1px solid white",
                borderRadius: "45px",
                p: 1,
              }}
            >
              <HouseboatIcon
                sx={{
                  height: { xs: "10px", md: "15px" },
                  width: { xs: "10px", md: "15px" },
                }}
              />
              <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
                Stays
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "5px", md: "10px" },
                cursor: "pointer",
              }}
            >
              <FlightLandIcon
                sx={{
                  height: { xs: "10px", md: "15px" },
                  width: { xs: "10px", md: "15px" },
                }}
              />
              <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
                Flights
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "5px", md: "10px" },
                cursor: "pointer",
              }}
            >
              <CarRentalIcon
                sx={{
                  height: { xs: "10px", md: "15px" },
                  width: { xs: "10px", md: "15px" },
                }}
              />
              <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
                Car Rentals
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "5px", md: "10px" },
                cursor: "pointer",
              }}
            >
              <AttractionsIcon
                sx={{
                  height: { xs: "10px", md: "15px" },
                  width: { xs: "10px", md: "15px" },
                }}
              />
              <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
                Attractions
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "5px", md: "10px" },
                cursor: "pointer",
              }}
            >
              <AirportShuttleIcon
                sx={{
                  height: { xs: "10px", md: "15px" },
                  width: { xs: "10px", md: "15px" },
                }}
              />
              <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
                Airport Taxis
              </Typography>
            </Box>
          </Box>
          {/* header title */}
          {type !== "hotelsList" && (
            <>
              <Box
                sx={{
                  p: 3,
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >
                <Typography sx={{ fontSize: "25px" }}>
                  A Lifetime of discounts ? It's genius !!
                </Typography>
                <Typography sx={{ fontSize: "15px" }}>
                  Get Rewarded for your travels - unlock instant savings of 10%
                  or more with a free Sunset Suties Account.
                </Typography>
                {!user ? (
                  <Button
                    onClick={login}
                    sx={{
                      backgroundColor: "white",
                      p: "5px 15px 5px 15px",
                      borderRadius: "9px",
                      border: "none",
                      width: { xs: "100px", md: "150px" },
                      fontSize: { xs: "12px", md: "18px" },
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    Sign In
                  </Button>
                ) : (
                  <Button
                    onClick={logout}
                    sx={{
                      backgroundColor: "white",
                      p: "5px 15px 5px 15px",
                      borderRadius: "9px",
                      border: "none",
                      width: { xs: "100px", md: "150px" },
                      fontSize: { xs: "12px", md: "18px" },
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    Sign Out
                  </Button>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-around",
                  alignItems: "center",
                  border: `3px solid ${amber[500]}`,
                  backgroundColor: "white",
                  color: "black",
                  position: "absolute",
                  gap: 2,
                  bottom: "-25px",
                  p: { xs: "5px", md: "5px 10px" },
                  ml: { xs: -8, md: 0 },
                  width: "90vw",
                  maxWidth: "1024px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <HouseboatIcon />
                  <input
                    style={{
                      height: "35px",
                      backgroundColor: amber[50],
                      border: "none",
                      outline: "none",
                      borderRadius: "9px",
                    }}
                    placeholder="Where are you going ?"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </Box>
                <Box
                  onClick={toggleCalendar}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <CalendarMonthIcon />
                  <Typography sx={{ fontSize: "12px" }}>
                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                      dates[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </Typography>
                </Box>
                {showCalendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                  />
                )}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <EmojiPeopleIcon onClick={toggleShowOptions} />
                  <Typography
                    onClick={toggleShowOptions}
                    sx={{ fontSize: "12px" }}
                  >
                    {`${options.adults} adults . ${options.children} children. ${options.room} Room`}
                  </Typography>
                  {/* options */}
                  {showOptions && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50px",
                        backgroundColor: "white",
                        color: "grey",
                        borderRadius: "5px",
                        padding: "15px",
                        zIndex: "2",
                      }}
                    >
                      {/* items */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <Typography sx={{ fontSize: "12px" }}>
                          Adults
                        </Typography>
                        <Button
                          sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            width: "15px",
                            height: "20px",
                            padding: "3px",
                            "&:hover": {
                              backgroundColor: "primary.main",
                              color: "white",
                            },
                          }}
                          onClick={() =>
                            handleOptionChange("adults", "increment")
                          }
                        >
                          +
                        </Button>
                        <Typography sx={{ fontSize: "9px" }}>
                          {options.adults}
                        </Typography>
                        <Button
                          disabled={options.adults <= 1}
                          sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            width: "15px",
                            height: "20px",
                            padding: "3px",
                            "&:hover": {
                              backgroundColor: "primary.main",
                              color: "white",
                            },
                          }}
                          onClick={() =>
                            handleOptionChange("adults", "decrement")
                          }
                        >
                          -
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <Typography sx={{ fontSize: "12px" }}>
                          Children
                        </Typography>
                        <Button
                          sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            width: "15px",
                            height: "20px",
                            padding: "3px",
                            "&:hover": {
                              backgroundColor: "primary.main",
                              color: "white",
                            },
                          }}
                          onClick={() =>
                            handleOptionChange("children", "increment")
                          }
                        >
                          +
                        </Button>
                        <Typography sx={{ fontSize: "9px" }}>
                          {options.children}
                        </Typography>
                        <Button
                          disabled={options.children <= 0}
                          sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            width: "15px",
                            height: "20px",
                            padding: "3px",
                            "&:hover": {
                              backgroundColor: "primary.main",
                              color: "white",
                            },
                          }}
                          onClick={() =>
                            handleOptionChange("children", "decrement")
                          }
                        >
                          -
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <Typography sx={{ fontSize: "12px" }}>Room</Typography>
                        <Button
                          sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            width: "15px",
                            height: "20px",
                            padding: "3px",
                            "&:hover": {
                              backgroundColor: "primary.main",
                              color: "white",
                            },
                          }}
                          onClick={() =>
                            handleOptionChange("room", "increment")
                          }
                        >
                          +
                        </Button>
                        <Typography sx={{ fontSize: "9px" }}>
                          {options.room}
                        </Typography>
                        <Button
                          disabled={options.room <= 1}
                          sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            width: "15px",
                            height: "20px",
                            padding: "3px",
                            "&:hover": {
                              backgroundColor: "primary.main",
                              color: "white",
                            },
                          }}
                          onClick={() =>
                            handleOptionChange("room", "decrement")
                          }
                        >
                          -
                        </Button>
                      </Box>
                    </Box>
                  )}
                </Box>
                <Button
                  sx={{
                    backgroundColor: "primary.dark",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      color: "white",
                    },
                  }}
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Fragment>
  );
}

export default Header;
