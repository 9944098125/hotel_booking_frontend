import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import HotelsList from "../Pages/HotelsList";
import Hotel from "../Pages/Hotel";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Login from "../Pages/Login";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "15vh", md: "10vh" },
          width: "100vw",
        }}
      >
        <Navbar />
      </Box>
      <Box
        sx={{
          height: { xs: "83vh", md: "90vh" },
          overflowY: "scroll",
        }}
      >
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hotels",
        element: <HotelsList />,
      },
      {
        path: "/hotels/:hotelId",
        element: <Hotel />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
