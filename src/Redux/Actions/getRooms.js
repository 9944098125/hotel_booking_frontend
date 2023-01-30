import { GET_ROOMS_START, GET_ROOMS_SUCCESS, GET_ROOMS_FAIL } from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const getRooms = (hotelId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ROOMS_START,
    });
    const roomsResponse = await api.get(`/hotels/rooms/${hotelId}`);
    if (roomsResponse) {
      dispatch({
        type: GET_ROOMS_SUCCESS,
        payload: roomsResponse.data,
      });
      //   console.log(roomsResponse);
    }
  } catch (err) {
    dispatch({
      type: GET_ROOMS_FAIL,
      payload: err.response.data,
    });
    console.log("get rooms error in the frontend: ", err);
  }
};

export const updateRoomAvailability = (roomId, dates) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_AVAILABILITY_START",
    });
    const res = await api.put(`/rooms/updateRoomAvailability/${roomId}`, {
      dates,
    });
    if (res) {
      dispatch({
        type: "UPDATE_AVAILABILITY_SUCCESS",
        payload: res.data,
      });
      console.log(res);
      dispatch(alertActions.success("Room Reserved successfully..."));
      setTimeout(() => {
        dispatch(alertActions.success_clear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    dispatch({
      type: "UPDATE_AVAILABILITY_FAIL",
      payload: err.response.data.message,
    });
    dispatch(alertActions.error("Could not Reserve a Room for you, sorry !!"));
    setTimeout(() => {
      dispatch(alertActions.error_clear());
      dispatch(alertActions.clear());
    }, 3000);
    console.log("update room availability error in the frontend: ", err);
  }
};
