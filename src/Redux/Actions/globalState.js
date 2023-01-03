import { NEW_SEARCH, RESET_SEARCH } from "./Types";

export const searchState = (data) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_SEARCH,
      payload: data,
    });
  } catch (err) {
    console.log("search state error", err);
  }
};
