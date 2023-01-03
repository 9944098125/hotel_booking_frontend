import {
  COUNT_BY_CITY_SUCCESS,
  COUNT_BY_CITY_FAIL,
  COUNT_BY_TYPE_SUCCESS,
  COUNT_BY_TYPE_FAIL,
} from "../Actions/Types";

const initialState = {
  hotels: [],
  errorMessage: "",
  loading: false,
  data: [],
  featuredHotels: [],
};

export default function featuredHotelsCountByCityTypesAndQuery(
  state = initialState,
  action
) {
  const { type, payload } = action;
  switch (type) {
    case "COUNT_BY_CITY_START":
      return {
        ...state,
        loading: true,
      };
    case COUNT_BY_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        hotels: payload,
      };
    case COUNT_BY_CITY_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    case "COUNT_BY_TYPE_START":
      return {
        ...state,
        loading: true,
      };
    case COUNT_BY_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case COUNT_BY_TYPE_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    case "GET_FEATURED_START":
      return {
        ...state,
        loading: true,
      };
    case "GET_FEATURED_SUCCESS":
      return {
        ...state,
        loading: false,
        featuredHotels: payload,
      };
    case "GET_FEATURED_FAIL":
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
}
