import React, { Fragment } from "react";
import { Box, Button, Typography } from "@mui/material";

function SearchItems() {
  return (
    <Fragment>
      {/* searched items */}
      <Box
        sx={{
          border: "2px solid grey",
          padding: 1.5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          borderRadius: "9px",
          width: { xs: "90%", md: "100%" },
          height: { xs: "100%", md: "320px" },
          gap: { xs: "5px", md: "10px" },
          mb: { xs: "100px", md: 5 },
        }}
      >
        <img
          src="https://www.royalorchidhotels.com/images/propertygallery/04_Nov_2022_06_33_01Deluxe%20Twin%20Room.jpg"
          alt=""
          className="hotelImage"
        />
        {/* text of item */}
        <Box
          sx={{ display: "flex", flexDirection: "column", pt: 0.5, flex: "2" }}
        >
          <Typography
            component={"h3"}
            sx={{
              fontSize: { xs: "10px", md: "18px" },
              fontWeight: { xs: "600", md: "800" },
              color: "primary.dark",
            }}
          >
            Town street Apartments
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "8px", md: "12px" }, color: "grey", mt: 3 }}
          >
            500m from center
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "white",
              mt: 1,
              backgroundColor: "green",
              p: 0.5,
              width: "max-content",
              borderRadius: "5px",
            }}
          >
            Free Airport Taxi
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "grey",
              mt: 1,
              fontWeight: "600",
            }}
          >
            Studio Apartment with Air conditioning
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "8px", md: "12px" }, color: "grey", mt: 1 }}
          >
            Entire studio. 1 barhroom. 10m square 2 full beds.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "green",
              mt: 1,
              fontWeight: "800",
            }}
          >
            Free cancellation
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "green",
              mt: 1,
              fontWeight: "800",
            }}
          >
            You can even cancel later, so lock in this great price today!!
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            alignItems: "center",
            gap: { xs: "100px", md: "150px" },
          }}
        >
          {/* rating container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
              Excellent
            </Typography>
            <Button
              sx={{
                backgroundColor: "primary.dark",
                fontSize: { xs: "5px", md: "10px" },
                p: 0.2,
                color: "white",
                "&:hover": { backgroundColor: "primary.dark", color: "white" },
              }}
            >
              8.9
            </Button>
          </Box>
          {/* availablity button */}
          <Box sx={{}}>
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
              $140
            </Typography>
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
              Includes all the taxes and fee
            </Typography>
            <Button
              sx={{
                backgroundColor: "secondary.dark",
                color: "white",
                fontSize: { xs: "8px", md: "10px" },
                "&:hover": {
                  backgroundColor: "secondary.dark",
                  color: "white",
                },
              }}
            >
              See Availability
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          border: "2px solid grey",
          padding: 1.5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          borderRadius: "9px",
          width: { xs: "90%", md: "100%" },
          height: { xs: "100%", md: "320px" },
          gap: { xs: "5px", md: "10px" },
          mb: { xs: "100px", md: 5 },
        }}
      >
        <img
          src="https://www.royalorchidhotels.com/images/propertygallery/04_Nov_2022_06_33_01Deluxe%20Twin%20Room.jpg"
          alt=""
          className="hotelImage"
        />
        {/* text of item */}
        <Box
          sx={{ display: "flex", flexDirection: "column", pt: 0.5, flex: "2" }}
        >
          <Typography
            component={"h3"}
            sx={{
              fontSize: { xs: "10px", md: "18px" },
              fontWeight: { xs: "600", md: "800" },
              color: "primary.dark",
            }}
          >
            Town street Apartments
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "8px", md: "12px" }, color: "grey", mt: 3 }}
          >
            500m from center
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "white",
              mt: 1,
              backgroundColor: "green",
              p: 0.5,
              width: "max-content",
              borderRadius: "5px",
            }}
          >
            Free Airport Taxi
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "grey",
              mt: 1,
              fontWeight: "600",
            }}
          >
            Studio Apartment with Air conditioning
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "8px", md: "12px" }, color: "grey", mt: 1 }}
          >
            Entire studio. 1 barhroom. 10m square 2 full beds.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "green",
              mt: 1,
              fontWeight: "800",
            }}
          >
            Free cancellation
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "green",
              mt: 1,
              fontWeight: "800",
            }}
          >
            You can even cancel later, so lock in this great price today!!
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            alignItems: "center",
            gap: { xs: "100px", md: "150px" },
          }}
        >
          {/* rating container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
              Excellent
            </Typography>
            <Button
              sx={{
                backgroundColor: "primary.dark",
                fontSize: { xs: "5px", md: "10px" },
                p: 0.2,
                color: "white",
                "&:hover": { backgroundColor: "primary.dark", color: "white" },
              }}
            >
              8.9
            </Button>
          </Box>
          {/* availablity button */}
          <Box sx={{}}>
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
              $140
            </Typography>
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
              Includes all the taxes and fee
            </Typography>
            <Button
              sx={{
                backgroundColor: "secondary.dark",
                color: "white",
                fontSize: { xs: "8px", md: "10px" },
                "&:hover": {
                  backgroundColor: "secondary.dark",
                  color: "white",
                },
              }}
            >
              See Availability
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          border: "2px solid grey",
          padding: 1.5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          borderRadius: "9px",
          width: { xs: "90%", md: "100%" },
          height: { xs: "100%", md: "320px" },
          gap: { xs: "5px", md: "10px" },
          mb: { xs: "100px", md: 5 },
        }}
      >
        <img
          src="https://www.royalorchidhotels.com/images/propertygallery/04_Nov_2022_06_33_01Deluxe%20Twin%20Room.jpg"
          alt=""
          className="hotelImage"
        />
        {/* text of item */}
        <Box
          sx={{ display: "flex", flexDirection: "column", pt: 0.5, flex: "2" }}
        >
          <Typography
            component={"h3"}
            sx={{
              fontSize: { xs: "10px", md: "18px" },
              fontWeight: { xs: "600", md: "800" },
              color: "primary.dark",
            }}
          >
            Town street Apartments
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "8px", md: "12px" }, color: "grey", mt: 3 }}
          >
            500m from center
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "white",
              mt: 1,
              backgroundColor: "green",
              p: 0.5,
              width: "max-content",
              borderRadius: "5px",
            }}
          >
            Free Airport Taxi
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "grey",
              mt: 1,
              fontWeight: "600",
            }}
          >
            Studio Apartment with Air conditioning
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "8px", md: "12px" }, color: "grey", mt: 1 }}
          >
            Entire studio. 1 barhroom. 10m square 2 full beds.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "green",
              mt: 1,
              fontWeight: "800",
            }}
          >
            Free cancellation
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "green",
              mt: 1,
              fontWeight: "800",
            }}
          >
            You can even cancel later, so lock in this great price today!!
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            alignItems: "center",
            gap: { xs: "100px", md: "150px" },
          }}
        >
          {/* rating container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
              Excellent
            </Typography>
            <Button
              sx={{
                backgroundColor: "primary.dark",
                fontSize: { xs: "5px", md: "10px" },
                p: 0.2,
                color: "white",
                "&:hover": { backgroundColor: "primary.dark", color: "white" },
              }}
            >
              8.9
            </Button>
          </Box>
          {/* availablity button */}
          <Box sx={{}}>
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
              $140
            </Typography>
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
              Includes all the taxes and fee
            </Typography>
            <Button
              sx={{
                backgroundColor: "secondary.dark",
                color: "white",
                fontSize: { xs: "8px", md: "10px" },
                "&:hover": {
                  backgroundColor: "secondary.dark",
                  color: "white",
                },
              }}
            >
              See Availability
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          border: "2px solid grey",
          padding: 1.5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          borderRadius: "9px",
          width: { xs: "90%", md: "100%" },
          height: { xs: "100%", md: "320px" },
          gap: { xs: "5px", md: "10px" },
          mb: { xs: "100px", md: 5 },
        }}
      >
        <img
          src="https://www.royalorchidhotels.com/images/propertygallery/04_Nov_2022_06_33_01Deluxe%20Twin%20Room.jpg"
          alt=""
          className="hotelImage"
        />
        {/* text of item */}
        <Box
          sx={{ display: "flex", flexDirection: "column", pt: 0.5, flex: "2" }}
        >
          <Typography
            component={"h3"}
            sx={{
              fontSize: { xs: "10px", md: "18px" },
              fontWeight: { xs: "600", md: "800" },
              color: "primary.dark",
            }}
          >
            Town street Apartments
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "8px", md: "12px" }, color: "grey", mt: 3 }}
          >
            500m from center
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "white",
              mt: 1,
              backgroundColor: "green",
              p: 0.5,
              width: "max-content",
              borderRadius: "5px",
            }}
          >
            Free Airport Taxi
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "grey",
              mt: 1,
              fontWeight: "600",
            }}
          >
            Studio Apartment with Air conditioning
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "8px", md: "12px" }, color: "grey", mt: 1 }}
          >
            Entire studio. 1 barhroom. 10m square 2 full beds.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "green",
              mt: 1,
              fontWeight: "800",
            }}
          >
            Free cancellation
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "green",
              mt: 1,
              fontWeight: "800",
            }}
          >
            You can even cancel later, so lock in this great price today!!
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            alignItems: "center",
            gap: { xs: "100px", md: "150px" },
          }}
        >
          {/* rating container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
              Excellent
            </Typography>
            <Button
              sx={{
                backgroundColor: "primary.dark",
                fontSize: { xs: "5px", md: "10px" },
                p: 0.2,
                color: "white",
                "&:hover": { backgroundColor: "primary.dark", color: "white" },
              }}
            >
              8.9
            </Button>
          </Box>
          {/* availablity button */}
          <Box sx={{}}>
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
              $140
            </Typography>
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
              Includes all the taxes and fee
            </Typography>
            <Button
              sx={{
                backgroundColor: "secondary.dark",
                color: "white",
                fontSize: { xs: "8px", md: "10px" },
                "&:hover": {
                  backgroundColor: "secondary.dark",
                  color: "white",
                },
              }}
            >
              See Availability
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          border: "2px solid grey",
          padding: 1.5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          borderRadius: "9px",
          width: { xs: "90%", md: "100%" },
          height: { xs: "100%", md: "320px" },
          gap: { xs: "5px", md: "10px" },
          mb: { xs: "100px", md: 5 },
        }}
      >
        <img
          src="https://www.royalorchidhotels.com/images/propertygallery/04_Nov_2022_06_33_01Deluxe%20Twin%20Room.jpg"
          alt=""
          className="hotelImage"
        />
        {/* text of item */}
        <Box
          sx={{ display: "flex", flexDirection: "column", pt: 0.5, flex: "2" }}
        >
          <Typography
            component={"h3"}
            sx={{
              fontSize: { xs: "10px", md: "18px" },
              fontWeight: { xs: "600", md: "800" },
              color: "primary.dark",
            }}
          >
            Town street Apartments
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "8px", md: "12px" }, color: "grey", mt: 3 }}
          >
            500m from center
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "white",
              mt: 1,
              backgroundColor: "green",
              p: 0.5,
              width: "max-content",
              borderRadius: "5px",
            }}
          >
            Free Airport Taxi
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "grey",
              mt: 1,
              fontWeight: "600",
            }}
          >
            Studio Apartment with Air conditioning
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "8px", md: "12px" }, color: "grey", mt: 1 }}
          >
            Entire studio. 1 barhroom. 10m square 2 full beds.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "green",
              mt: 1,
              fontWeight: "800",
            }}
          >
            Free cancellation
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", md: "12px" },
              color: "green",
              mt: 1,
              fontWeight: "800",
            }}
          >
            You can even cancel later, so lock in this great price today!!
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            alignItems: "center",
            gap: { xs: "100px", md: "150px" },
          }}
        >
          {/* rating container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
              Excellent
            </Typography>
            <Button
              sx={{
                backgroundColor: "primary.dark",
                fontSize: { xs: "5px", md: "10px" },
                p: 0.2,
                color: "white",
                "&:hover": { backgroundColor: "primary.dark", color: "white" },
              }}
            >
              8.9
            </Button>
          </Box>
          {/* availablity button */}
          <Box sx={{}}>
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
              $140
            </Typography>
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
              Includes all the taxes and fee
            </Typography>
            <Button
              sx={{
                backgroundColor: "secondary.dark",
                color: "white",
                fontSize: { xs: "8px", md: "10px" },
                "&:hover": {
                  backgroundColor: "secondary.dark",
                  color: "white",
                },
              }}
            >
              See Availability
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default SearchItems;
