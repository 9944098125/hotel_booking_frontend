import { Box, Button, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import Header from "../Components/Header";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailList from "../Components/MailList";
import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

function Hotel() {
  const photos = [
    {
      src: "https://www.thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg",
    },
    {
      src: "https://media.gettyimages.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=gi&k=20&c=3vv4EtZGwSJPQaeIKVqzXzXgoSSMPOwqH8VfCcPWHIY=",
    },
    {
      src: "https://kreatecube.com/usefull/vendor/36434/gallery/15319.jpg",
    },
    {
      src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2J1jTRkpt8JY3uY6E7ekLETgzIaz_5H6fg&usqp=CAU",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [show, setShow] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setShow(!show);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <Fragment>
      <Header type="hotelsList" />
      {/* hotel container */}
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
                src={photos[slideNumber].src}
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
            Grand Hotel
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <LocationOnIcon
              sx={{
                height: { xs: "20px", md: "25px" },
                width: { xs: "20px", md: "25px" },
              }}
            />
            <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
              Elton 23, sans burg, Mexico, USA
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: { xs: "12px", md: "15px" }, color: "primary.main" }}
          >
            Excellent location - 500m from center
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "12px", md: "15px" }, color: "green" }}
          >
            Book a stay over here at $450 and get a free airport taxi
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
            {photos.map((photo, idx) => (
              <Box key={idx} sx={{ width: "33%" }}>
                <img
                  onClick={() => handleOpen(idx)}
                  src={photo.src}
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
                Stay in heart of karkow
              </Typography>
              <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
                Some descritption about somethingsdfas asdfa sdfasdfa sdfa
                sdfasdf asdf asdfasdfa sdfa sdfa sdf;ljasdfl ajsdfalsdj falsdjf
                asdlf jsldkfj asldfijasdfosdjf oaisdjfoasidjf asdofj sdl fiasdjf
                lsdi fjsdof iasj Some descritption about somethingsdfas asdfa
                sdfasdfa sdfa sdfasdf asdf asdfasdfa sdfa sdfa sdf;ljasdfl
                ajsdfalsdj falsdjf asdlf jsldkfj asldfijasdfosdjf oaisdjfoasidjf
                asdofj sdl fiasdjf lsdi fjsdof iasj Some descritption about
                somethingsdfas asdfa sdfasdfa sdfa sdfasdf asdf asdfasdfa sdfa
                sdfa sdf;ljasdfl ajsdfalsdj falsdjf asdlf jsldkfj
                asldfijasdfosdjf oaisdjfoasidjf asdofj sdl fiasdjf lsdi fjsdof
                iasj
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
                Perfect stay for 8-nights
              </Typography>
              <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
                Location in real heart of karkol.
              </Typography>
              <Typography sx={{ fontSize: { xs: "15px", md: "19px" } }}>
                $346 (8-nights)
              </Typography>
              <Button
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
    </Fragment>
  );
}

export default Hotel;
