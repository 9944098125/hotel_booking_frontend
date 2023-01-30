import { GET_HOTEL_SUCCESS, GET_HOTEL_FAIL } from "./Types";
import api from "../Api/Api";

export const getHotel = (hotelId) => async (dispatch) => {
  try {
    const hotelResponse = await api.get(`/hotels/hotel/${hotelId}`);
    if (hotelResponse) {
      dispatch({
        type: GET_HOTEL_SUCCESS,
        payload: hotelResponse.data.hotel,
      });
      //   console.log(hotelResponse);
    }
  } catch (err) {
    dispatch({
      type: GET_HOTEL_FAIL,
      payload: err.response.data.message,
    });
    console.log("get a hotel error in the frontend: ", err);
  }
};
