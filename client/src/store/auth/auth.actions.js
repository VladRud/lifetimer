import axios from 'axios';
import { AuthTypes } from './auth.types';
import { checkAndSetToken, removeToken, setToken } from '../../services/tokenService';
import { UserTypes } from "../user/user.types";
import { getCurrentUserAction } from "../user/user.actions";

export const signUpAction = (data) => {
  return dispatch => {
    axios.post('/auth/register', data)
      .then(({data}) => {
        authSuccess(dispatch)(data);
      })
      .catch((result) => {
        console.log(result);
      });
  }
};

export const signInAction = (data) => {
  return dispatch => {
    axios.post('/auth/login', data)
      .then(({data}) => {
        authSuccess(dispatch)(data);
      })
      .catch(({response}) => {
        console.log(response);
      });
  }
};

export const checkAuthTokenOnInitAction = () => {
  return dispatch => {
    if (checkAndSetToken()) {
      dispatch({type: AuthTypes.CHECK_TOKEN_ON_INIT});
      dispatch(getCurrentUserAction(true))
    }
  }
};

export const logoutAction = () => {
  return dispatch => {
    removeToken();
    dispatch({type: AuthTypes.LOGOUT});
  }
};

const authSuccess = (dispatch) => ({user, token}) => {
  setToken(token.accessToken);
  dispatch({type: UserTypes.USER_GET_SUCCESS, payload: user});
  dispatch({type: AuthTypes.AUTH_SUCCESS});
};
