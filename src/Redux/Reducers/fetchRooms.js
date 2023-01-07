import { FETCH_ROOMS_SUCCESS, FETCH_ROOMS_FAIL } from "../Actions/Types";

const initialState = {
  rooms: [],
  failMessage: "",
};

export default function fetchRooms(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: payload,
      };
    case FETCH_ROOMS_FAIL:
      return {
        ...state,
        failMessage: payload,
      };
    default:
      return state;
  }
}
