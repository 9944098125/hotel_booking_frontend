import {
  GET_HOTELS_SUCCESS,
  GET_HOTELS_START,
  GET_HOTELS_FAIL,
} from "../Actions/Types";

const initialState = {
  hotels: [],
  errorMsg: "",
  loading: false,
};

export default function getHotels(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_HOTELS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_HOTELS_SUCCESS:
      return {
        ...state,
        loading: false,
        hotels: payload,
      };
    case GET_HOTELS_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: payload,
      };
    default:
      return state;
  }
}
