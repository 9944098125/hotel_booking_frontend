import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

export default function AlertModal(props) {
  const { show } = props;
  const Alert = useSelector((state) => state.alert);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "200px",
    maxHeight: "270px",
    backgroundColor: "white",
    boxShadow: 24,
    p: 4,
    borderRadius: "9px",
  };

  return (
    <Fragment>
      {Alert.type === "success" ? (
        // success modal
        <Modal open={show}>
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
                height: "5rem",
                color: "#FFFFFF",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1V_Cdefqh5M7Y4_dwGGqgKKJQQFTUWFXCaA&usqp=CAU"
                alt="tick"
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </Box>
            <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
              {Alert.message}
            </Typography>
          </Box>
        </Modal>
      ) : (
        // failure modal
        <Modal open={show}>
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
                height: "5rem",
                color: "#FFFFFF",
              }}
            >
              <img
                src="https://ouch-cdn2.icons8.com/jOC_S7nwiQaiVEWlk1raasyhLKnyTREa6vanhpBZY4s/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzI5/Lzg0NTE5YzM0LThh/NmItNDM1MS1hOTk0/LWFhMzVjOWE1YzZm/NS5wbmc.png"
                alt="cross"
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </Box>
            <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
              {Alert.message}
            </Typography>
          </Box>
        </Modal>
      )}
    </Fragment>
  );
}
