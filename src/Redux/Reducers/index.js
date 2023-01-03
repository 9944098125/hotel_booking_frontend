import { combineReducers } from "redux";
import { alert } from "./alertReducer";
import featuredHotelsCountByCityTypesAndQuery from "./featuredHotels";
import getHotel from "./getHotel";
import searchState from "./globalState";

export default combineReducers({
  alert,
  featuredHotelsCountByCityTypesAndQuery,
  getHotel,
  searchState,
});
