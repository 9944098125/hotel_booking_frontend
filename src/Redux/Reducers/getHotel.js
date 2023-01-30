import { GET_HOTEL_FAIL, GET_HOTEL_SUCCESS } from "../Actions/Types";

const initialState = {
  hotel: {},
  errorMsg: "",
};

export default function getHotel(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_HOTEL_SUCCESS:
      return {
        ...state,
        hotel: payload,
      };
    case GET_HOTEL_FAIL:
      return {
        ...state,
        errorMsg: payload,
      };
    default:
      return state;
  }
}
