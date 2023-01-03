import {
  GET_HOTEL_FAIL,
  GET_HOTEL_START,
  GET_HOTEL_SUCCESS,
} from "../Actions/Types";

const initialState = {
  hotel: {},
  errorMessage: "",
  loading: false,
};

export default function getHotel(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_HOTEL_START:
      return {
        ...state,
        loading: true,
      };
    case GET_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        hotel: payload,
      };
    case GET_HOTEL_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
}
