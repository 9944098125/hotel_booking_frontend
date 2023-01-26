import React, { Fragment, useEffect, useState, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { SearchContext } from "../Context/searchContext";
import axios from "axios";

function Reserve({ setShowModal, hotelId }) {
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState([]);

  const { data, loading, error } = useFetch(`/hotels/rooms/${hotelId}`);
  console.log(data);
  // console.log(selectedRooms);

  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const datesList = [];

    while (date <= end) {
      datesList.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return datesList;
  };

  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  const isAvailable = (oneRoom) => {
    const isFound = oneRoom.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/updateRoomAvailability/${roomId}`, {
            dates: allDates,
          });
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
          {Array.isArray(data) &&
            data.map(
              (room, idx) =>
                room !== null && (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: { xs: 1, md: 3 },
                    }}
                  >
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
                        {room.maxPeople} people
                      </Typography>
                      <Typography sx={{ fontSize: { xs: "8px", md: "12px" } }}>
                        {room.price}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                      {room.roomNumbers.map((oneRoom, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: { xs: "8px", md: "12px" } }}
                          >
                            {oneRoom.number}
                          </Typography>
                          <input
                            type="checkbox"
                            value={oneRoom._id}
                            onChange={handleSelect}
                            disabled={!isAvailable(oneRoom)}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )
            )}
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
