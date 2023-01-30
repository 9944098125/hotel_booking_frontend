import { GET_FEATURED_SUCCESS, GET_FEATURED_FAIL } from "./Types";
import api from "../Api/Api";

export const getFeatured = () => async (dispatch) => {
  try {
    const featuredResponse = await api.get("/hotels?featured=true&limit=6");
    if (featuredResponse) {
      dispatch({
        type: GET_FEATURED_SUCCESS,
        payload: featuredResponse.data,
      });
      //   console.log(featuredResponse);
    }
  } catch (err) {
    dispatch({
      type: GET_FEATURED_FAIL,
      payload: err.response.data.message,
    });
    console.log("get featured properties error in the frontend: ", err);
  }
};
