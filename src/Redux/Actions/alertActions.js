import { SUCCESS, ERROR, SUCCESS_CLEAR, ERROR_CLEAR, CLEAR } from "./Types";

export const alertActions = {
  success,
  success_clear,
  error,
  error_clear,
  clear,
};

function success(message) {
  return { type: SUCCESS, message };
}

function error(message) {
  return { type: ERROR, message };
}

function success_clear(message) {
  return { type: SUCCESS_CLEAR, message };
}

function error_clear(message) {
  return { type: ERROR_CLEAR, message };
}

function clear(message) {
  return { type: CLEAR, message };
}
