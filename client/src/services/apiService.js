import axios from 'axios';

export const setApiUrl = (url) => {
  axios.defaults.baseURL = url;
};

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common[ 'Authorization' ] = `Bearer ${ token }`;
  }
};

export const removeAuthorizationToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

// TODO checkStatusError, transformData
