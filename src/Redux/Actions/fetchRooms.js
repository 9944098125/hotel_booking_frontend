import { FETCH_ROOMS_SUCCESS, FETCH_ROOMS_FAIL } from "./Types";
import api from "../Api/Api";

export const fetchRooms = (hotelId) => async (dispatch) => {
  try {
    const res = await api.get(`/hotels/rooms/${hotelId}`);
    dispatch({
      type: FETCH_ROOMS_SUCCESS,
      payload: res.data && res.data.rooms,
    });
    // console.log("rooms res", res);
  } catch (err) {
    dispatch({
      type: FETCH_ROOMS_FAIL,
      payload: err.response.data,
    });
    console.log("fetch rooms error", err);
  }
};
