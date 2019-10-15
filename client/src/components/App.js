import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from "./molecules/PrivateRoute/PrivateRoute";
import SignUpContainer from "../containers/SignUpContainer";
import SignInContainer from "../containers/SignInContainer";
import MainContainer from "../containers/MainContainer";
import './App.scss';

const App = ({
               loadingOnInitApp,
               isLoggedIn,
               userTokenCheckedOnInit,
               checkAuthTokenOnInitAction,
             }) => {
  if (!userTokenCheckedOnInit && !loadingOnInitApp) {
    checkAuthTokenOnInitAction()
  }

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" component={MainContainer} hasAccess={isLoggedIn} exact/>
        <Route path="/sign-in" component={SignInContainer}/>
        <Route path="/sign-up" component={SignUpContainer}/>
      </Switch>
    </div>
  );
};

export default App;
