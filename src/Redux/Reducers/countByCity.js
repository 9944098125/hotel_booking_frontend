import {
  GET_COUNT_SUCCESS,
  GET_COUNT_FAIL,
  GET_COUNT_BY_TYPE_SUCCESS,
  GET_COUNT_BY_TYPE_FAIL,
} from "../Actions/Types";

const initialState = {
  count: [],
  errorMessage: "",
  types: [],
};

export default function count(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COUNT_SUCCESS:
      return {
        ...state,
        count: payload,
      };
    case GET_COUNT_FAIL:
      return {
        ...state,
        errorMessage: payload,
      };
    case GET_COUNT_BY_TYPE_SUCCESS:
      return {
        ...state,
        types: payload,
      };
    case GET_COUNT_BY_TYPE_FAIL:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
}
