import { NEW_SEARCH, RESET_SEARCH } from "../Actions/Types";

const initialState = {
  city: undefined,
  dates: [],
  options: {
    adults: undefined,
    children: undefined,
    room: undefined,
  },
};

export default function search(state = initialState, action) {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case NEW_SEARCH:
      return payload;
    case RESET_SEARCH:
      return initialState;
    default:
      return state;
  }
}
