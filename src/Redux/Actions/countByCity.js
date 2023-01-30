import {
  GET_COUNT_SUCCESS,
  GET_COUNT_FAIL,
  GET_COUNT_BY_TYPE_SUCCESS,
  GET_COUNT_BY_TYPE_FAIL,
} from "./Types";
import api from "../Api/Api";

export const countByCity = () => async (dispatch) => {
  try {
    const countResponse = await api.get(
      "/hotels/countByCity?cities=kakinada,banglore,pune"
    );
    if (countResponse) {
      dispatch({
        type: GET_COUNT_SUCCESS,
        payload: countResponse.data.hotels,
      });
      // console.log(countResponse);
    }
  } catch (err) {
    console.log("get hotels count by city error in the frontend: ", err);
    dispatch({
      type: GET_COUNT_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const countByType = () => async (dispatch) => {
  try {
    const countResponse = await api.get("/hotels/countByType");
    if (countResponse) {
      dispatch({
        type: GET_COUNT_BY_TYPE_SUCCESS,
        payload: countResponse.data,
      });
      console.log(countResponse);
    }
  } catch (err) {
    dispatch({
      type: GET_COUNT_BY_TYPE_FAIL,
      payload: err.response.data.message,
    });
    console.log("get hotels by count of types error in frontend: ", err);
  }
};
