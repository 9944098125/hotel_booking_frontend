import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const loginAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_START,
    });
    const res = await api.post("/auth/login", data);
    if (res) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data && res.data.details,
      });
    }
  } catch (err) {
    console.log("Login error in frontend: ", err);
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
