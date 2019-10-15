import React from 'react';
import './AuthTemplate.scss';
import { Redirect } from "react-router-dom";

const AuthTemplate = ({isLoggedIn, children}) => {
  // TODO remove from components
  if (isLoggedIn) {
    return <Redirect to='/'/>;
  }

  return (
    <div className="Auth-template">
      {children}
    </div>
  )
};

export default AuthTemplate;
