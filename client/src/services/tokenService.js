import { removeAuthorizationToken, setAuthorizationToken } from "./apiService";

export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
  setAuthorizationToken(token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
  removeAuthorizationToken();
};

export const checkAndSetToken= () => {
  const token = getToken();
  // TODO check on valid token;

  if (!token) {
    return false;
  }

  setAuthorizationToken(token);
  return true;
};
