import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, hasAccess, ...rest}) =>
  <Route {...rest} render={props =>
    (
      hasAccess ?
        <Component {...props} />
        :
        <Redirect to="/sign-in"/>
    )
  }/>;

export default PrivateRoute;
