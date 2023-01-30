import { GET_HOTELS_START, GET_HOTELS_SUCCESS, GET_HOTELS_FAIL } from "./Types";
import api from "../Api/Api";

export const getHotels = (destination, min, max) => async (dispatch) => {
  dispatch({
    type: GET_HOTELS_START,
  });
  try {
    const hotelsResponse = await api.get(
      `/hotels?city=${destination}&min=${min || 1}&max=${max || 999999}`
    );
    if (hotelsResponse) {
      dispatch({
        type: GET_HOTELS_SUCCESS,
        payload: hotelsResponse.data,
      });
      console.log(hotelsResponse);
    }
  } catch (err) {
    dispatch({
      type: GET_HOTELS_FAIL,
      payload: err.response.data.message,
    });
    console.log("get hotels error in the frontend: ", err);
  }
};
