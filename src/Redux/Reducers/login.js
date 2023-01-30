import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../Actions/Types";

const initialState = {
  loading: false,
  user: null,
  token: localStorage.getItem("token"),
  loginFailMessage: "",
  isAuthenticated: false,
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
      localStorage.setItem("user", JSON.stringify(payload));
      localStorage.setItem("token", JSON.stringify(payload.token));
      localStorage.setItem("isActivated", true);
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload,
        token: payload.token,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loginFailMessage: payload,
        loading: false,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isActivated");
      return {
        loading: false,
        user: null,
        token: undefined,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
