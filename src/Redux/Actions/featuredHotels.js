import {
  COUNT_BY_CITY_SUCCESS,
  COUNT_BY_CITY_FAIL,
  COUNT_BY_TYPE_SUCCESS,
  COUNT_BY_TYPE_FAIL,
} from "../Actions/Types";
import api from "../Api/Api";

export const featuredHotelsAction = (cities) => async (dispatch) => {
  dispatch({
    type: "COUNT_BY_CITY_START",
  });
  try {
    const res = await api.get(`/hotels/countByCity?cities=${cities}`);
    if (res) {
      dispatch({
        type: COUNT_BY_CITY_SUCCESS,
        payload: res.data && res.data.hotels,
      });
      // console.log("Featured Hotels Count response: ", res);
    }
  } catch (err) {
    console.log("Featured Hotels count error: ", err);
    dispatch({
      type: COUNT_BY_CITY_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const countByType = () => async (dispatch) => {
  dispatch({
    type: "COUNT_BY_TYPE_START",
  });
  try {
    const res = await api.get("/hotels/countByType");
    if (res) {
      dispatch({
        type: COUNT_BY_TYPE_SUCCESS,
        payload: res.data,
      });
      // console.log("count by type res", res);
    }
  } catch (err) {
    dispatch({
      type: COUNT_BY_TYPE_FAIL,
      payload: err.response.data,
    });
    console.log("count by type error", err);
  }
};

export const getFeaturedProperties = (query) => async (dispatch) => {
  dispatch({
    type: "GET_FEATURED_START",
  });
  try {
    const res = await api.get(`/hotels?${query}`);
    if (res) {
      dispatch({
        type: "GET_FEATURED_SUCCESS",
        payload: res.data && res.data.hotels,
      });
      // console.log("get featured properties res", res);
    }
  } catch (err) {
    dispatch({
      type: "GET_FEATURED_FAIL",
      payload: err.response.featuredHotelsAction,
    });
  }
};
