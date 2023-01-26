import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { Fragment, useState, useEffect, useContext } from "react";
import Header from "../Components/Header";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailList from "../Components/MailList";
import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useLocation, useNavigate } from "react-router-dom";
import Reserve from "../Components/Reserve";
import useFetch from "../Hooks/useFetch";
import { SearchContext } from "../Context/searchContext";

function Hotel() {
  const navigate = useNavigate();

  const [slideNumber, setSlideNumber] = useState(0);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(`/hotels/hotel/${hotelId}`);
  // console.log("hotel data", data);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleOpen = (i) => {
    setSlideNumber(i);
    setShow(!show);
  };

  const { dates, options } = useContext(SearchContext);
  console.log("dates", dates);

  const MILLI_SECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLI_SECONDS_PER_DAY);
    return diffDays;
  }

  const days = dates && dayDifference(dates[0]?.endDate, dates[0]?.startDate);

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const handleClickReserveHotelButton = () => {
    if (user) {
      setShowModal(!showModal);
    } else {
      navigate("/login");
    }
  };

  return (
    <Fragment>
      <Header type="hotelsList" />
      {/* hotel container */}
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
        data.hotel && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              pt: 5,
            }}
          >
            {show && (
              // slider
              <Box
                sx={{
                  position: "sticky",
                  top: "0px",
                  left: "0px",
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 0.426)",
                  zIndex: "999",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CloseIcon
                  onClick={() => setShow(false)}
                  sx={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    fontSize: "30px",
                    color: "grey",
                    cursor: "pointer",
                  }}
                />
                <ArrowCircleLeftIcon
                  sx={{
                    margin: "20px",
                    fontSize: "50px",
                    color: "grey",
                    cursor: "pointer",
                  }}
                  onClick={() => handleMove("left")}
                />
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={data.hotel.photos[slideNumber]}
                    alt=""
                    className="sliderImage"
                  />
                </Box>
                <ArrowCircleRightIcon
                  sx={{
                    margin: "20px",
                    fontSize: "50px",
                    color: "grey",
                    cursor: "pointer",
                  }}
                  onClick={() => handleMove("right")}
                />
              </Box>
            )}
            <Box
              sx={{
                width: "100%",
                maxWidth: "1024px",
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                gap: "10px",
                position: "relative",
                mb: -5,
              }}
            >
              <Button
                onClick={handleClickReserveHotelButton}
                sx={{
                  backgroundColor: "secondary.dark",
                  position: { xs: "static", md: "absolute" },
                  color: "white",
                  fontSize: { xs: "10px", md: "14px" },
                  top: "10px",
                  right: "0px",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Reserve or Book Now
              </Button>
              <Typography
                sx={{
                  color: "primary.dark",
                  fontSize: { xs: "18px", md: "22px" },
                  fontWeight: "800",
                }}
              >
                {data.hotel.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <LocationOnIcon
                  sx={{
                    height: { xs: "20px", md: "25px" },
                    width: { xs: "20px", md: "25px" },
                  }}
                />
                <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
                  {data.hotel.address}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "15px" },
                  color: "primary.main",
                }}
              >
                Excellent location - {data.hotel.distance} from center
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "15px" },
                  color: "green",
                  width: "50%",
                }}
              >
                Book a stay over here at ${data.hotel.cheapestPrice} and get a
                free airport taxi
              </Typography>
              {/* hotel images */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                {data.hotel.photos?.map((photo, idx) => (
                  <Box key={idx} sx={{ width: "33%" }}>
                    <img
                      onClick={() => handleOpen(idx)}
                      src={photo}
                      alt=""
                      className="imagesOfSingleHotel"
                    />
                  </Box>
                ))}
              </Box>
              {/* hotel details */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  gap: "20px",
                  mt: 10,
                }}
              >
                <Box sx={{ flex: "3", p: 2 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", md: "19px" },
                      fontWeight: "800",
                      color: "primary.dark",
                    }}
                  >
                    Stay in heart of {data.hotel.city}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
                    {data.hotel.desc}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    p: 2,
                    backgroundColor: "primary.bg",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "14px", md: "16px" }, color: "#555" }}
                  >
                    Perfect stay for - {days} nights
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
                    Location in real heart of {data.hotel.city}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "15px", md: "19px" } }}>
                    $
                    {days === 0
                      ? data.hotel.cheapestPrice
                      : days * data.hotel.cheapestPrice * options.room}{" "}
                    ({days}-nights)
                  </Typography>
                  <Button
                    onClick={handleClickReserveHotelButton}
                    sx={{
                      backgroundColor: "secondary.dark",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "secondary.main",
                        color: "white",
                      },
                    }}
                  >
                    Reserve or Book Now
                  </Button>
                </Box>
              </Box>
              <MailList />
            </Box>
          </Box>
        )
      )}
      {showModal && <Reserve setShowModal={setShowModal} hotelId={hotelId} />}
    </Fragment>
  );
}

export default Hotel;
