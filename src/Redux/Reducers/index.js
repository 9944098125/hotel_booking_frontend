import { combineReducers } from "redux";
import { alert } from "./alertReducer";
import register from "./register";
import auth from "./login";
import search from "./search";
import count from "./countByCity";
import featured from "./featured";
import roomsReducer from "./getRooms";
import getHotel from "./getHotel";
import getHotels from "./getHotels";

export default combineReducers({
  alert,
  register,
  auth,
  search,
  count,
  featured,
  roomsReducer,
  getHotel,
  getHotels,
});
