import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../Actions/Types";

const initialState = {
  user: JSON.parse(localStorage.getItem("loggedInUser")),
  isAuthenticated: localStorage.getItem("loggedInUser") ? true : false,
  loading: false,
  loginFailMessage: "",
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("loggedInUser", JSON.stringify(payload));
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        loginFailMessage: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}
