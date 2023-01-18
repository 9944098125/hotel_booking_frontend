import React, { Fragment, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../Redux/Actions/fetchRooms";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Reserve({ setShowModal, hotelId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState([]);

  useEffect(() => {
    dispatch(fetchRooms(hotelId));
  }, [dispatch, hotelId]);

  const RoomsData = useSelector((state) => state.fetchRooms);
  // const DDOState = useSelector((state) => state.searchState);
  // console.log("dates", DDOState);
  const DDOState = JSON.parse(localStorage.getItem("ddo"));
  // console.log("ddo", DDOState);

  const handleRoomNumbersChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((room) => room !== value)
    );
  };
  console.log("selected rooms", selectedRooms);
  // console.log("rooms data", RoomsData);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let list = [];
    while (date <= end) {
      list.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return list;
  };

  const allDates = getDatesInRange(
    DDOState.date[0].startDate,
    DDOState.date[0].endDate
  );

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  // console.log(
  //   "date in range",
  //   getDatesInRange(DDOState.date[0].startDate, DDOState.date[0].endDate)
  // );

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:3499/api/rooms/updateRoomAvailability/${roomId}`,
            {
              dates: allDates,
            }
          );
          return res.data;
        })
      );
      setShowModal(false);
      navigate("/");
    } catch (err) {}
  };

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vw",
          backgroundColor: "rgba(0, 0, 0, 0.418)",
          position: "fixed",
          top: "0",
          left: "0",
          marginTop: { xs: 20, md: -40 },
          borderRadius: "9px",
        }}
      >
        <Box sx={{ backgroundColor: "white", position: "relative", p: 3 }}>
          <CloseIcon
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              cursor: "pointer",
            }}
            onClick={() => setShowModal(false)}
          />
          <Typography sx={{ fontSize: { xs: "10px", md: "13px" } }}>
            Select your rooms
          </Typography>
          {Array.isArray(RoomsData.rooms) &&
            RoomsData.rooms.map((room) => (
              // item
              <Box
                key={room._id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "20px", md: "50px" },
                  p: { xs: 1, md: 3 },
                }}
              >
                {/* information */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: "5px", md: "7px" },
                  }}
                >
                  <Typography sx={{ fontSize: { xs: "8px", md: "12px" } }}>
                    {room.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "8px", md: "12px" } }}>
                    {room.desc}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "8px", md: "12px" } }}>
                    Max People: <b>{room.maxPeople}</b>
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "8px", md: "12px" } }}>
                    {room.price}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {room.roomNumbers.map((num, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Typography sx={{ fontSize: { xs: "8px", md: "12px" } }}>
                        {num.number}
                      </Typography>
                      <input
                        type="checkbox"
                        value={num._id}
                        onChange={handleRoomNumbersChange}
                        disabled={!isAvailable(num)}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          <Button
            type="button"
            onClick={handleClick}
            sx={{
              backgroundColor: "secondary.dark",
              color: "white",
              width: "100%",
              "&:hover": { backgroundColor: "secondary.dark", color: "white" },
            }}
          >
            Reserve Now
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Reserve;
