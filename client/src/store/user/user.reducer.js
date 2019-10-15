import { UserTypes } from "./user.types";

const initialState = {};

export function user(state = initialState, action) {
  switch (action.type) {
    case UserTypes.USER_GET_SUCCESS:
      return {
        ...action.payload
      };
    default:
      return state
  }
}
