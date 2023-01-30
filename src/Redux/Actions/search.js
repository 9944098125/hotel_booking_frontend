import { NEW_SEARCH } from "./Types";

export const searchHotels = (journeyData) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_SEARCH,
      payload: journeyData,
    });
  } catch (err) {
    dispatch({
      type: "SEARCH_FAIL",
      payload: err.response.data,
    });
  }
};
