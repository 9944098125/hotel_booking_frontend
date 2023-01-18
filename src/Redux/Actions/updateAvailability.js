import {
  UPDATE_AVAILABILITY_FAIL,
  UPDATE_AVAILABILITY_START,
  UPDATE_AVAILABILITY_SUCCESS,
} from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const updateAvailability = (roomId, dates) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_AVAILABILITY_START,
    });
    const res = await api.put(`/rooms/updateRoomAvailability/${roomId}`, {
      dates: dates,
    });
    if (res) {
      dispatch({
        type: UPDATE_AVAILABILITY_SUCCESS,
        payload: res.data,
      });
      console.log("reserve res", res);
    }
  } catch (err) {
    dispatch({
      type: UPDATE_AVAILABILITY_FAIL,
      payload: err.response.data,
    });
  }
};
