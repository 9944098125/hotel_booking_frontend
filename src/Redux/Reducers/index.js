import { combineReducers } from "redux";
import { alert } from "./alertReducer";
import featuredHotelsCountByCityTypesAndQuery from "./featuredHotels";
import getHotel from "./getHotel";
import searchState from "./globalState";
import auth from "./loginReducer";
import fetchRooms from "./fetchRooms";

export default combineReducers({
  alert,
  featuredHotelsCountByCityTypesAndQuery,
  getHotel,
  searchState,
  auth,
  fetchRooms,
});
