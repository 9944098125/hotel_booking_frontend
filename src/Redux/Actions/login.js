import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./Types";
import { alertActions } from "./alertActions";
import api from "../Api/Api";

export const login = (data) => async (dispatch) => {
  dispatch({
    type: LOGIN_START,
  });
  try {
    const loginResponse = await api.post("/auth/login", data);
    if (loginResponse) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: loginResponse.data.details,
      });
      console.log(loginResponse);
    }
  } catch (err) {
    console.log("Login error in the frontend: ", err);
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message,
    });
    dispatch(alertActions.error(err.response.data.message));
    setTimeout(() => {
      dispatch(alertActions.error_clear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
