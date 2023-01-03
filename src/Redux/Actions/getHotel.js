import { GET_HOTEL_START, GET_HOTEL_SUCCESS, GET_HOTEL_FAIL } from "./Types";
import api from "../Api/Api";

export const getHotel = (hotelId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_HOTEL_START,
    });
    const res = await api.get(`/hotels/hotel/${hotelId}`);
    if (res) {
      dispatch({
        type: GET_HOTEL_SUCCESS,
        payload: res.data.hotel,
      });
      // console.log("get hotel res", res);
    }
  } catch (err) {
    dispatch({
      type: GET_HOTEL_FAIL,
      payload: err.response.data,
    });
    console.log("get hotel by id error: ", err);
  }
};
