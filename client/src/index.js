import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import config from "./config";
import { setApiUrl } from "./services/apiService";
import { Provider } from "react-redux";
import store from "./store/store";
import { FocusStyleManager } from "@blueprintjs/core";
import AppContainer from "./containers/AppContainer";

setApiUrl(config.apiUrl);

FocusStyleManager.onlyShowFocusOnTabs();

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
