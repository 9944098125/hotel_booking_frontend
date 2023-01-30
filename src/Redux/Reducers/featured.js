import { GET_FEATURED_SUCCESS, GET_FEATURED_FAIL } from "../Actions/Types";

const initialState = {
  hotels: [],
  errorMsg: "",
};

export default function featured(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FEATURED_SUCCESS:
      return {
        ...state,
        hotels: payload,
      };
    case GET_FEATURED_FAIL:
      return {
        ...state,
        errorMsg: payload,
      };
    default:
      return state;
  }
}
