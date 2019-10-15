import axios from 'axios';
import { UserTypes } from "./user.types";
import { AuthTypes } from "../auth/auth.types";

export const getCurrentUserAction = (onInitApp = false) => {
  return dispatch => {
    axios.get('/users/profile')
      .then(({data}) => {
        dispatch({type: UserTypes.USER_GET_SUCCESS, payload: data});
        if (onInitApp) {
          dispatch({type: AuthTypes.CHECK_TOKEN_ON_INIT_SUCCESS});
        }
      })
      .catch((result) => {
        // TODO check 401
        if (onInitApp) {
          dispatch({type: AuthTypes.CHECK_TOKEN_ON_INIT_FAIL});
        }
        console.log(result);
      });
  }
};
