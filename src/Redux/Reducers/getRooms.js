import {
  GET_ROOMS_FAIL,
  GET_ROOMS_START,
  GET_ROOMS_SUCCESS,
} from "../Actions/Types";

const initialState = {
  loading: false,
  rooms: [],
  errorMsg: "",
};

export default function roomsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ROOMS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: payload,
      };
    case GET_ROOMS_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: payload,
      };
    default:
      return state;
  }
}
