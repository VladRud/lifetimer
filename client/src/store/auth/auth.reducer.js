import { AuthTypes } from './auth.types';

const initialState = {
  userTokenCheckedOnInit: false,
  loadingOnInitApp: false,
  isLoggedIn: false,
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    case AuthTypes.CHECK_TOKEN_ON_INIT:
      return {
        ...state,
        loadingOnInitApp: true
      };
    case AuthTypes.CHECK_TOKEN_ON_INIT_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loadingOnInitApp: false,
        userTokenCheckedOnInit: true
      };
    case AuthTypes.CHECK_TOKEN_ON_INIT_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        loadingOnInitApp: false,
        userTokenCheckedOnInit: true
      };
    default:
      return state
  }
}
